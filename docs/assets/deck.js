/* ==========================================================================
   Diplomado BIM + IA — Motor de presentaciones (comportamiento)
   Fuente ÚNICA de lógica. Convierte sessions/<slug>.md en un deck navegable.
   No requiere build: Markdown híbrido + marked (vendorizado) + mermaid (lazy).
   ========================================================================== */
(function () {
  'use strict';

  // La sesión se enruta por el HASH (deck.html#s=<slug>), no por query string:
  // el hash nunca viaja al servidor, así ningún redirect de "clean URLs" (serve,
  // Vercel, GitHub Pages) puede descartarlo. Se acepta ?query como respaldo.
  var hp = new URLSearchParams((location.hash || '').replace(/^#/, ''));
  var qp = new URLSearchParams(location.search);
  var slug = (hp.get('s') || qp.get('s') || '').replace(/[^a-z0-9_-]/gi, '');
  var preview = hp.has('preview') || qp.has('preview'); // #s=...&preview=1 → ver borradores bloqueados
  var deck = document.getElementById('deck');

  // Sin #s=<sesión> el reproductor no sabe qué mostrar → volver al índice (el lanzador).
  if (!slug) { location.replace('index.html'); return; }

  // Reconstruye el hash conservando slug y preview; opcionalmente fija la diapositiva n.
  function deckHash(n) {
    var h = '#s=' + slug + (preview ? '&preview=1' : '');
    return n ? h + '&n=' + n : h;
  }

  // Se cargan en paralelo el manifiesto (para el control de acceso) y el contenido.
  Promise.all([
    fetch('sessions/manifest.json', { cache: 'no-cache' }).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; }),
    fetch('sessions/' + slug + '.md', { cache: 'no-cache' }).then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
  ]).then(function (res) {
    var manifest = res[0], md = res[1];
    var entry = manifest && (manifest.sesiones || []).filter(function (s) { return s.slug === slug; })[0];
    // Solo las sesiones marcadas "listo" están abiertas. El resto quedan bloqueadas
    // para los estudiantes; el docente las previsualiza con #s=...&preview=1.
    if (entry && entry.estado !== 'listo' && !preview) { return showLocked(entry); }
    build(md);
  }).catch(function () {
    showMsg('No se pudo cargar la sesión',
      'Verificá que exista <code>sessions/' + slug + '.md</code>.<br>' +
      'Si abriste el archivo con doble clic, servilo con <code>npx serve</code> desde la carpeta <code>docs/</code> (el navegador bloquea <code>fetch</code> sobre <code>file://</code>).');
  });

  function showLocked(entry) {
    document.title = 'Sesión en preparación — Diplomado BIM + IA';
    showMsg('Sesión en preparación',
      'La sesión <b>' + esc(String(entry.num)) + ' · ' + esc(entry.titulo) + '</b> todavía no está disponible.<br>' +
      (entry.fecha ? 'Fecha prevista: ' + esc(entry.fecha) + '.<br>' : '') +
      'Volvé al <a href="index.html">índice del diplomado</a>.');
  }

  /* ---------------- Frontmatter ---------------- */
  function parseFront(src) {
    var meta = {}, body = src;
    var m = /^﻿?---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(src);
    if (m) {
      body = src.slice(m[0].length);
      m[1].split(/\r?\n/).forEach(function (line) {
        var kv = /^([A-Za-z0-9_-]+)\s*:\s*(.*)$/.exec(line);
        if (kv) meta[kv[1].toLowerCase()] = kv[2].trim().replace(/^["']|["']$/g, '');
      });
    }
    return { meta: meta, body: body };
  }

  /* ---------------- Directivas ::: ---------------- */
  var LEAF = { metrics: 1, chips: 1, flow: 1 };

  function renderMarkdownWithDirectives(md) {
    var lines = md.replace(/\r\n/g, '\n').split('\n');
    var ptr = { i: 0 };
    return parse(lines, ptr, false);
  }

  function parse(lines, ptr, insideBlock) {
    var out = '', buf = [], fence = null;
    function flush() {
      var text = buf.join('\n');
      if (text.trim()) out += marked.parse(text);
      buf = [];
    }
    while (ptr.i < lines.length) {
      var line = lines[ptr.i];
      var t = line.trim();
      // Dentro de un bloque de código (``` o ~~~), NO interpretar directivas :::
      var fm = /^(`{3,}|~{3,})/.exec(t);
      if (fence) {
        buf.push(line); ptr.i++;
        if (fm && t.slice(0, fence.length) === fence) fence = null;
        continue;
      }
      if (fm) { fence = fm[1]; buf.push(line); ptr.i++; continue; }
      if (insideBlock && t === ':::') { ptr.i++; flush(); return out; }
      var open = /^:::([a-z0-9-]+)(?:\s+(.*))?$/i.exec(t);
      if (open) {
        flush();
        ptr.i++;
        var name = open[1].toLowerCase();
        var arg = (open[2] || '').trim();
        if (LEAF[name]) { out += leaf(name, collectRaw(lines, ptr)); }
        else { out += wrap(name, arg, parse(lines, ptr, true)); }
        continue;
      }
      buf.push(line); ptr.i++;
    }
    flush();
    return out;
  }

  function collectRaw(lines, ptr) {
    var raw = [];
    while (ptr.i < lines.length && lines[ptr.i].trim() !== ':::') { raw.push(lines[ptr.i]); ptr.i++; }
    if (ptr.i < lines.length) ptr.i++; // consume closing :::
    return raw;
  }

  function wrap(name, arg, inner) {
    switch (name) {
      case 'split': return '<div class="split">' + inner + '</div>';
      case 'split-3': return '<div class="split-3">' + inner + '</div>';
      case 'split-6': return '<div class="split-6">' + inner + '</div>';
      case 'stack': return '<div class="stack">' + inner + '</div>';
      case 'note': case 'warn': case 'ok': return '<div class="callout ' + name + '">' + inner + '</div>';
      case 'diagram': return '<div class="card-diagram">' + inner + '</div>';
      // Recuadro que no se muestra al entrar a la lámina: espera a que el docente pulse →.
      // El envoltorio exterior es el que colapsa, así el .callout de adentro conserva su caja.
      case 'spoiler': {
        var flavor = /^(note|warn|ok)$/.test(arg) ? arg : 'warn';
        return '<div class="spoiler"><div class="callout ' + flavor + '">' + inner + '</div></div>';
      }
      case 'card': {
        var tag = '', title = arg;
        var tm = /^\[([^\]]*)\]\s*(.*)$/.exec(arg);
        if (tm) { tag = tm[1].trim(); title = tm[2].trim(); }
        var accent = /^!/.test(title); if (accent) title = title.slice(1).trim();
        var cls = 'card' + (accent ? ' accent-border' : '');
        var head = '';
        if (tag) head += '<span class="ctag">' + esc(tag) + '</span>';
        if (title) head += '<h3>' + inlineMd(title) + '</h3>';
        // Si la tarjeta contiene un bloque :::diagram, se vuelve revelable con <details>:
        // todo lo previo al diagrama queda en <summary> (siempre visible); el diagrama
        // queda fuera de <summary>, que el navegador muestra/oculta nativamente.
        var dIdx = inner.indexOf('<div class="card-diagram">');
        if (dIdx !== -1) {
          var before = inner.slice(0, dIdx);
          var after = inner.slice(dIdx);
          return '<details class="' + cls + '"><summary>' + head + before +
            '<span class="card-diagram-hint">Ver gráfico</span></summary>' + after + '</details>';
        }
        return '<div class="' + cls + '">' + head + inner + '</div>';
      }
      default: return '<div class="card">' + inner + '</div>';
    }
  }

  function leaf(name, raw) {
    if (name === 'chips') {
      var items = raw.join(' ').split(',').map(trim).filter(Boolean);
      return '<div class="chips">' + items.map(function (c) { return '<span class="chip">' + esc(c) + '</span>'; }).join('') + '</div>';
    }
    if (name === 'metrics') {
      var cells = raw.map(trim).filter(Boolean).map(function (r) {
        var p = r.split('|').map(trim);
        return '<div class="metric"><span class="val">' + esc(p[0] || '') + '</span><span class="lab">' + esc(p[1] || '') + '</span></div>';
      });
      return '<div class="metrics-row">' + cells.join('') + '</div>';
    }
    if (name === 'flow') {
      var seq = raw.join(' ').split('->').map(trim).filter(Boolean);
      var boxes = seq.map(function (b, k) {
        var hi = /^\*/.test(b); if (hi) b = b.slice(1).trim();
        var box = '<div class="arch-box' + (hi ? ' highlight' : '') + '">' + esc(b) + '</div>';
        return k < seq.length - 1 ? box + '<span class="arch-arrow">→</span>' : box;
      });
      return '<div class="arch-flow">' + boxes.join('') + '</div>';
    }
    return '';
  }

  /* ---------------- Construcción del deck ---------------- */
  function build(src) {
    var parsed = parseFront(src);
    var meta = parsed.meta;
    document.title = plainText(meta.titulo || 'Sesión') + ' — Diplomado BIM + IA';

    var chunks = parsed.body.split(/\n[ \t]*-{3,}[ \t]*\n/);
    var slidesHTML = [coverSlide(meta)];

    chunks.forEach(function (chunk) {
      if (!chunk.trim()) return;
      slidesHTML.push(contentSlide(chunk));
    });

    deck.innerHTML = slidesHTML.join('');
    styleSlides();
    mountChrome(meta);
    initNav();
    renderMermaid();
  }

  function coverSlide(meta) {
    var eyebrow = (meta.eyebrow || 'Curso BIM + IA') + ' · Sesión ' + (meta.sesion || '');
    var pills = '';
    if (meta.docente) pills += '<span class="pill solid">Docente: ' + esc(meta.docente) + '</span>';
    if (meta.fecha) pills += '<span class="pill">' + esc(meta.fecha) + '</span>';
    return '<section class="slide cover active"><div class="wrap">' +
      '<div class="stagger"><span class="eyebrow"><span class="dot"></span>' + esc(eyebrow) + '</span></div>' +
      '<h1 class="title stagger">' + inlineMd(meta.titulo || 'Sesión') + '</h1>' +
      (meta.subtitulo ? '<p class="sub stagger">' + inlineMd(meta.subtitulo) + '</p>' : '') +
      (pills ? '<div class="stagger">' + pills + '</div>' : '') +
      '</div></section>';
  }

  function contentSlide(chunk) {
    var eyebrow = '';
    chunk = chunk.replace(/^﻿?\s*\^\^\s*(.+)$/m, function (_, txt) {
      eyebrow = '<span class="eyebrow"><span class="dot"></span>' +
        esc(txt.trim()).replace(/^([^/]*\/)/, '<span class="idx">$1</span>') + '</span>';
      return '';
    });
    var inner = renderMarkdownWithDirectives(chunk);
    return '<section class="slide"><div class="wrap">' + eyebrow + inner + '</div></section>';
  }

  /* Auto-estilo: clases, lede, stagger, cover */
  function styleSlides() {
    Array.prototype.forEach.call(deck.querySelectorAll('.slide'), function (slide) {
      var wrap = slide.querySelector('.wrap');
      if (!wrap) return;
      if (!slide.classList.contains('cover') && wrap.querySelector(':scope > h1')) slide.classList.add('cover');

      Array.prototype.forEach.call(wrap.querySelectorAll(':scope > h1'), function (h) { h.classList.add('title'); });
      Array.prototype.forEach.call(wrap.querySelectorAll(':scope > h2'), function (h) { h.classList.add('title'); });

      // Primer blockquote de nivel superior -> lede
      var bq = wrap.querySelector(':scope > blockquote');
      if (bq) {
        var p = document.createElement('p');
        p.className = 'lede';
        p.innerHTML = bq.innerHTML.replace(/<\/?p>/g, ' ').trim();
        bq.parentNode.replaceChild(p, bq);
      }
      // Portada: primer <p> -> subtítulo
      if (slide.classList.contains('cover')) {
        var sub = wrap.querySelector(':scope > p:not(.sub)');
        if (sub) sub.classList.add('sub');
      }
      // Entrada escalonada: cada hijo directo del wrap anima en secuencia.
      // Los .spoiler quedan fuera: su opacidad la maneja el revelado, no la entrada.
      Array.prototype.forEach.call(wrap.children, function (c) {
        if (!c.classList.contains('spoiler')) c.classList.add('stagger');
      });
    });
  }

  /* ---------------- Chrome + navegación ---------------- */
  function mountChrome(meta) {
    var frag = document.createElement('div');
    frag.innerHTML =
      '<div class="footer"><span class="fl"><a href="index.html" title="Volver al índice">' +
      '<span class="brand">BIM + IA</span><span class="sub">Sesión ' + esc(meta.sesion || '') + '</span></a></span>' +
      '<span class="fc"><b id="cur">01</b> / <span id="tot">00</span>' +
      '<b id="spoil" title="Queda un bloque por revelar — pulsá →">●</b></span></div>' +
      '<div class="nav"><a href="index.html" aria-label="Índice">⌂</a>' +
      '<button id="prev" aria-label="Anterior">‹</button>' +
      '<button id="next" aria-label="Siguiente">›</button></div>' +
      '<div class="dots" id="dots"></div>' +
      '<div class="progress"><i id="bar"></i></div>' +
      '<div class="hint" id="hint">← → para navegar · deslizar en móviles</div>';
    while (frag.firstChild) document.body.appendChild(frag.firstChild);
  }

  function initNav() {
    var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
    var total = slides.length, i = 0;
    var cur = document.getElementById('cur'), tot = document.getElementById('tot');
    var bar = document.getElementById('bar'), dotsWrap = document.getElementById('dots');
    var hint = document.getElementById('hint');
    tot.textContent = String(total).padStart(2, '0');

    slides.forEach(function (_, idx) {
      var b = document.createElement('button');
      b.setAttribute('aria-label', 'Ir a diapositiva ' + (idx + 1));
      b.addEventListener('click', function () { go(idx); });
      dotsWrap.appendChild(b);
    });
    var dots = Array.prototype.slice.call(dotsWrap.children);

    /* Revelado progresivo (:::spoiler): un bloque marcado no se muestra al entrar a la
       lámina; el primer → lo despliega y recién el siguiente avanza. Así el deck no
       adelanta el desenlace de algo que todavía se va a mostrar en vivo. */
    var spoilFlag = document.getElementById('spoil');
    function pending(s) { return s.querySelector('.spoiler:not(.shown)'); }
    function setSpoilers(s, showAll) {
      Array.prototype.forEach.call(s.querySelectorAll('.spoiler'), function (el) {
        el.classList.toggle('shown', !!showAll);
      });
    }
    function syncFlag() { if (spoilFlag) spoilFlag.classList.toggle('on', !!pending(slides[i])); }
    // true = se reveló algo, así que NO hay que cambiar de lámina.
    function reveal() {
      var el = pending(slides[i]);
      if (!el) return false;
      el.classList.add('shown');
      syncFlag();
      return true;
    }
    function advance() { if (!reveal()) go(i + 1); }

    function go(n) {
      n = Math.max(0, Math.min(total - 1, n));
      if (n === i && slides[i].classList.contains('active')) return;
      var back = n < i;
      setSpoilers(slides[i], false); // la lámina que se abandona vuelve a su estado inicial
      slides[i].classList.remove('active');
      i = n;
      var s = slides[i]; void s.offsetWidth;
      setSpoilers(s, back);
      s.classList.add('active');
      s.scrollTop = 0;
      cur.textContent = String(i + 1).padStart(2, '0');
      bar.style.width = (total > 1 ? (i / (total - 1) * 100) : 0) + '%';
      dots.forEach(function (d, k) { d.classList.toggle('on', k === i); });
      if (i > 0 && hint) hint.style.opacity = '0';
      syncFlag();
      history.replaceState(null, '', deckHash(i + 1));
    }

    document.getElementById('next').addEventListener('click', function () { advance(); });
    document.getElementById('prev').addEventListener('click', function () { go(i - 1); });
    window.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); advance(); }
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); go(i - 1); }
      else if (e.key === 'Home') { go(0); }
      else if (e.key === 'End') { go(total - 1); }
      // s = revelar de una todo lo pendiente de la lámina, si el reloj no da para la pausa
      else if (e.key === 's' || e.key === 'S') { setSpoilers(slides[i], true); syncFlag(); }
    });

    var x0 = null, y0 = null;
    deck.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
    deck.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) { if (dx < 0) advance(); else go(i - 1); }
      x0 = y0 = null;
    }, { passive: true });

    dots[0].classList.add('on');
    bar.style.width = '0%';
    var start = parseInt(hp.get('n'), 10);
    if (start > 1 && start <= total) go(start - 1);
    syncFlag();
  }

  /* ---------------- Mermaid (carga diferida) ---------------- */
  function renderMermaid() {
    var blocks = Array.prototype.slice.call(deck.querySelectorAll('code.language-mermaid, code.lang-mermaid'));
    if (!blocks.length) return;
    blocks.forEach(function (code) {
      var div = document.createElement('div');
      div.className = 'mermaid';
      div.textContent = code.textContent;
      var pre = code.closest('pre') || code;
      pre.parentNode.replaceChild(div, pre);
    });
    var s = document.createElement('script');
    s.src = 'assets/mermaid.min.js';
    s.onload = function () {
      try { window.mermaid.initialize({ startOnLoad: false, theme: 'dark', securityLevel: 'loose', fontFamily: 'Inter, sans-serif' }); window.mermaid.run(); } catch (e) { }
    };
    document.body.appendChild(s);
  }

  /* ---------------- Utilidades ---------------- */
  function trim(s) { return s.trim(); }
  function plainText(s) { return String(s).replace(/\*\*([^*]+)\*\*/g, '$1').replace(/==([^=]+)==/g, '$1'); }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function inlineMd(s) {
    // Markdown en línea mínimo para títulos: **negrita**, ==resaltado==, *cian*
    return esc(s)
      .replace(/\*\*([^*]+)\*\*/g, '<span class="accent">$1</span>')
      .replace(/==([^=]+)==/g, '<span class="accent-c">$1</span>');
  }
  function showMsg(title, html) {
    deck.innerHTML = '<div class="deck-msg"><h2>' + esc(title) + '</h2><p>' + html + '</p></div>';
  }
})();
