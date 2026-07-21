# Presentation & Dashboard Pattern

This repository contains an extracted, generic HTML/CSS/JS pattern for creating highly visual, animated, web-based presentations and dashboards. It is based on a structured, declarative HTML approach with vanilla CSS and minimal Javascript for navigation.

## Core Capabilities

- **Staggered Animations**: Built-in CSS classes (`.stagger`) that sequence the entrance of elements on a slide automatically.
- **Glassmorphism UI**: Ready-to-use utility classes (`.card`, `.split`) that create a frosted glass effect layered over a complex SVG background.
- **Responsive Layout**: Adapts gracefully to mobile and tablet screens, converting complex grid layouts into readable single-column stacks.
- **Built-in Presentation Controls**: Includes a progress bar, pagination dots, keyboard navigation (arrows/spacebar), and touch-swipe support for mobile devices.

## How to Customize Colors & Typography

All visual themes are controlled via **CSS Variables** at the top of the `<style>` block in `:root`.

To tweak the colors, adjust the following tokens:

```css
:root {
  /* Background Colors */
  --bg-deep: #0D262C; /* Main deep background */
  --bg-mid: #16414B;  /* Lighter gradient background */
  
  /* Brand Accents */
  --accent-1: #FB8000; /* Primary brand color (e.g. Orange) */
  --accent-2: #FF9E40; /* Secondary brand color (e.g. Amber) */
  --accent-3: #62BFD0; /* Tertiary/Highlight (e.g. Cyan) */
  
  /* Text */
  --text-primary: #EAF2F4;
  --text-dim: rgba(234, 242, 244, 0.60);
  --text-faint: rgba(234, 242, 244, 0.30);
  
  /* Fonts */
  --font-display: 'Space Grotesk', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

By changing `--accent-1`, `--accent-2`, and `--accent-3`, you immediately change the progress bar, staggered typography highlights, and card accents throughout the entire presentation.

## HTML Structure Overview

A presentation is divided into standard building blocks:

### 1. The Deck and Slides
All slides must be placed inside `<div class="deck">`.
Each slide is a `<section class="slide">` containing a `<div class="wrap">`.

```html
<div class="deck" id="deck">
  <section class="slide active">
    <div class="wrap">
      <!-- Slide Content Here -->
    </div>
  </section>
</div>
```

### 2. Animating Elements (Stagger)
To make an element animate in when the slide becomes active, simply add the class `stagger`.
```html
<h2 class="title stagger">My Slide Title</h2>
<p class="lede stagger">A brief explanation.</p>
```

### 3. Common UI Patterns
- **Eyebrow text** (Small capitalized labels above titles):
  `<span class="eyebrow"><span class="dot"></span> Category</span>`
- **Lede text** (Secondary description text):
  `<p class="lede">This is the subtitle</p>`
- **Split layouts** (Two columns):
  `<div class="split"> <div>Left</div> <div>Right</div> </div>`
- **Cards** (Glassmorphic containers):
  `<div class="card">Content</div>`
- **Chips** (Small metadata tags):
  `<div class="chips"><span class="chip">Tag</span></div>`

## JavaScript Logic
The minimal JavaScript at the bottom of the template handles:
- Applying the `.active` class to the current slide.
- Updating the progress bar (`#bar`) and slide counter (`#cur`, `#tot`).
- Listening for keyboard events (`ArrowRight`, `ArrowLeft`, `Space`).
- Listening for touch events (swipe left/right) on mobile devices.

No dependencies (like React, Vue, or external JS libraries) are required. Simply open the file in a browser.
