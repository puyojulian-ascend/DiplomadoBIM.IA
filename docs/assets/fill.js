/* ==========================================================================
   Diplomado BIM + IA — Hojas de taller rellenables
   Convierte un taller renderizado en un formulario editable, y vuelve a
   escribir las respuestas dentro del Markdown original para descargarlo.

   Las zonas rellenables se detectan sin marcas especiales en el archivo:
     · bloque ``` sin lenguaje y sin dibujo de cajas  -> área de escritura
     · celda de tabla vacía                           -> campo de una línea
     · "- [ ]"                                        -> casilla marcable
   Los diagramas ASCII se excluyen por sus caracteres de caja: son ilustración,
   no espacio para escribir.
   ========================================================================== */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.Fill = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var ART = /[┌┐└┘├┤┬┴┼│─═║▶◀▲▼]/;

  function esSeparador(l) { return /^\s*\|?[\s:|-]*-[\s:|-]*\|?\s*$/.test(l) && l.indexOf('-') >= 0; }
  function esFilaTabla(l) { return /^\s*\|/.test(l); }

  /* Recorre el Markdown y ubica las tres clases de campo, en orden de
     documento. Los índices resultantes son los mismos que produce el DOM. */
  function scanSource(md) {
    var lines = md.replace(/\r\n/g, '\n').split('\n');
    var pres = [], cells = [], checks = [];
    var i = 0, fence = null, fenceLang = '', fenceStart = -1;

    while (i < lines.length) {
      var line = lines[i];
      var fm = /^(\s*)(`{3,}|~{3,})(.*)$/.exec(line);

      if (fence) {
        if (fm && fm[2].slice(0, fence.length) === fence) {
          var body = lines.slice(fenceStart + 1, i).join('\n');
          if (!fenceLang && !ART.test(body)) pres.push({ from: fenceStart + 1, to: i });
          fence = null; fenceLang = '';
        }
        i++; continue;
      }
      if (fm) { fence = fm[2]; fenceLang = fm[3].trim(); fenceStart = i; i++; continue; }

      var cb = /^(\s*)([-*+])\s+\[([ xX])\]/.exec(line);
      if (cb) { checks.push({ line: i, checked: cb[3] !== ' ' }); i++; continue; }

      // Tabla GFM: encabezado + separador + cuerpo. Solo el cuerpo lleva campos.
      if (esFilaTabla(line) && i + 1 < lines.length && esSeparador(lines[i + 1])) {
        i += 2;
        while (i < lines.length && esFilaTabla(lines[i])) {
          partesDeFila(lines[i]).forEach(function (p) {
            if (!p.texto.trim()) cells.push({ line: i, parte: p.idx });
          });
          i++;
        }
        continue;
      }
      i++;
    }
    return { pres: pres, cells: cells, checks: checks };
  }

  /* Divide una fila de tabla en celdas, conservando el índice de cada una. */
  function partesDeFila(line) {
    var row = line.trim();
    if (row.charAt(0) === '|') row = row.slice(1);
    if (row.charAt(row.length - 1) === '|') row = row.slice(0, -1);
    return row.split('|').map(function (texto, idx) { return { texto: texto, idx: idx }; });
  }

  /* Una fila de tabla Markdown vive en UNA línea, así que el contenido de la celda no
     puede llevar saltos crudos. Se conserva la intención pasándolos a <br>, que es la
     forma estándar de partir renglón dentro de una tabla GFM. Y se escapa el pipe: sin
     eso, un "|" tecleado en la respuesta agrega una columna y corrompe la tabla. */
  function textoDeCelda(v) {
    return String(v)
      .replace(/\r\n?/g, '\n')
      .replace(/\|/g, '\\|')
      .split('\n').map(function (l) { return l.trim(); }).join('\n')
      .replace(/\n{2,}/g, '\n')      // varias líneas en blanco seguidas -> una sola
      .replace(/^\n+|\n+$/g, '')     // sin saltos sueltos al principio ni al final
      .replace(/\n/g, '<br>');
  }

  function reconstruirFila(line, partes) {
    var ind = /^(\s*)/.exec(line)[1];
    return ind + '| ' + partes.map(function (p) { return p.texto.trim(); }).join(' | ') + ' |';
  }

  /* Vuelve a escribir el Markdown original con las respuestas dentro.
     answers: { "pre:0": "texto", "td:2": "texto", "chk:1": true } */
  function apply(md, answers) {
    answers = answers || {};
    var lines = md.replace(/\r\n/g, '\n').split('\n');
    var s = scanSource(md);

    s.checks.forEach(function (c, n) {
      var v = answers['chk:' + n];
      if (v === undefined) return;
      lines[c.line] = lines[c.line].replace(/\[[ xX]\]/, v ? '[x]' : '[ ]');
    });

    // Agrupadas por línea: una fila puede tener varias celdas vacías.
    var porLinea = {};
    s.cells.forEach(function (c, n) { (porLinea[c.line] = porLinea[c.line] || []).push({ parte: c.parte, n: n }); });
    Object.keys(porLinea).forEach(function (ln) {
      var partes = partesDeFila(lines[ln]), tocada = false;
      porLinea[ln].forEach(function (c) {
        var v = answers['td:' + c.n];
        if (v === undefined || !String(v).trim()) return;
        if (partes[c.parte]) { partes[c.parte].texto = textoDeCelda(v); tocada = true; }
      });
      // Sin respuestas no se reescribe la fila: así el archivo no cambia de formato.
      if (tocada) lines[ln] = reconstruirFila(lines[ln], partes);
    });

    // De atrás hacia adelante: reemplazar rangos no corre los índices previos.
    for (var k = s.pres.length - 1; k >= 0; k--) {
      var v = answers['pre:' + k];
      if (v === undefined || !String(v).trim()) continue;
      var texto = String(v).replace(/\s+$/, '').split('\n');
      Array.prototype.splice.apply(lines, [s.pres[k].from, s.pres[k].to - s.pres[k].from].concat(texto));
    }
    return lines.join('\n');
  }

  /* ---------------- Navegador ---------------- */

  function campos(root) {
    var sel = function (q) { return Array.prototype.slice.call(root.querySelectorAll(q)); };
    return {
      pres: sel('pre > code').filter(function (c) { return !ART.test(c.textContent); }),
      cells: sel('td').filter(function (td) { return !td.textContent.trim() && !td.children.length; }),
      checks: sel('input[type=checkbox]')
    };
  }

  /* Hace editable el documento y devuelve {read, clear}. */
  function hydrate(root, guardadas, onChange) {
    var c = campos(root), vals = guardadas || {};

    function marcar(el, clave, esTexto) {
      el.setAttribute('data-fill', clave);
      if (esTexto) {
        // "plaintext-only" evita que se pegue formato, pero no todos los
        // navegadores lo aceptan: si no queda editable, se usa el modo normal.
        el.setAttribute('contenteditable', 'plaintext-only');
        if (!el.isContentEditable) el.setAttribute('contenteditable', 'true');
        el.setAttribute('spellcheck', 'true');
        if (vals[clave] !== undefined) el.textContent = vals[clave];
        el.addEventListener('input', onChange);
        // Enter = salto de línea, parejo en todos los navegadores. Donde no se aceptó
        // "plaintext-only", el comportamiento por defecto insertaría nodos <div> y
        // textContent los leería todos pegados.
        el.addEventListener('keydown', function (ev) {
          if (ev.key !== 'Enter') return;
          ev.preventDefault();
          document.execCommand('insertText', false, '\n');
        });
        // Evita pegar HTML con formato dentro del campo.
        el.addEventListener('paste', function (ev) {
          ev.preventDefault();
          var t = (ev.clipboardData || window.clipboardData).getData('text');
          document.execCommand('insertText', false, t);
        });
      } else {
        el.removeAttribute('disabled');
        if (vals[clave] !== undefined) el.checked = !!vals[clave];
        el.addEventListener('change', onChange);
      }
    }

    c.pres.forEach(function (el, n) { marcar(el, 'pre:' + n, true); });
    c.cells.forEach(function (el, n) { marcar(el, 'td:' + n, true); });
    c.checks.forEach(function (el, n) { marcar(el, 'chk:' + n, false); });

    function read() {
      var out = {};
      c.pres.forEach(function (el, n) { out['pre:' + n] = el.textContent; });
      c.cells.forEach(function (el, n) { out['td:' + n] = el.textContent; });
      c.checks.forEach(function (el, n) { out['chk:' + n] = el.checked; });
      return out;
    }
    function clear() {
      c.pres.forEach(function (el) { el.textContent = ''; });
      c.cells.forEach(function (el) { el.textContent = ''; });
      c.checks.forEach(function (el) { el.checked = false; });
    }
    function count() {
      var v = read(), n = 0;
      Object.keys(v).forEach(function (k) {
        if (k.indexOf('chk:') === 0) { if (v[k]) n++; }
        else if (String(v[k]).trim()) n++;
      });
      return { llenos: n, total: c.pres.length + c.cells.length + c.checks.length };
    }
    return { read: read, clear: clear, count: count };
  }

  return { scanSource: scanSource, apply: apply, hydrate: hydrate, ART: ART };
});
