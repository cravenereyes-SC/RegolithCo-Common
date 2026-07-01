# Star Citizen Theme

A comprehensive futuristic UI theme inspired by the Star Citizen game aesthetic, featuring bright teals, dark blues, and neon glowing effects.

## Color Palette

### Primary Colors (Teals & Cyans)
- **Bright Cyan** (`#00d9ff`) - Main accent color, glowing elements
- **Rich Teal** (`#00b8d4`) - Secondary accent
- **Deep Teal** (`#0088a0`) - Hover states, borders

### Dark Blue (Base)
- **Darkest** (`#0a1628`) - Deep space background
- **Dark** (`#0f1f3c`) - Card backgrounds, panels
- **Medium** (`#1a2f4d`) - Borders, secondary elements
- **Light** (`#2a4166`) - Hover states, secondary backgrounds

### Accents
- **Orange** (`#ff6600`) - Call-to-action, warnings
- **Gold** (`#ffa500`) - Secondary accent
- **Green** (`#00ff88`) - Success states
- **Red** (`#ff3333`) - Error/danger states

### Neutrals
- **Off-white** (`#e8eef2`) - Primary text
- **Light Gray** (`#a8b5c4`) - Secondary text
- **Medium Gray** (`#7a8699`) - Muted text
- **Dark Gray** (`#4a5568`) - Disabled states

## Typography

### Fonts
- **Primary (Headings)**: Orbitron, Audiowide, or Courier New (monospace)
  - Futuristic, uppercase, letter-spaced
- **Secondary (Body)**: Inter, Segoe UI, or system sans-serif
  - Clean, readable, standard weight

### Styles
- All headings are uppercase with `letter-spacing: 0.1em`
- Headings have text shadow glow effect
- Buttons use primary font with uppercase text

## Usage

### CSS File
Import the CSS file in your project:

```html
<link rel="stylesheet" href="path/to/theme/starCitizen.css">
```

Or in your CSS:
```css
@import url('path/to/theme/starCitizen.css');
```

### Tailwind CSS
Use the Tailwind config to extend your project:

```javascript
// tailwind.config.js
const starCitizenConfig = require('@regolithco/common/theme/tailwind.config.js');

module.exports = {
  presets: [starCitizenConfig],
  // your other config
};
```

Or manually extend:
```javascript
// tailwind.config.js
module.exports = {
  extend: {
    colors: {
      'sc-bright': '#00d9ff',
      'sc-teal': '#00b8d4',
      // ... see tailwind.config.js for full list
    }
  }
};
```

### Utility Classes

#### Text Colors
```html
<p class="text-primary">Bright cyan text</p>
<p class="text-secondary">Light blue text</p>
<p class="text-accent">Orange text</p>
<p class="text-muted">Medium gray text</p>
```

#### Background
```html
<div class="bg-primary">Dark blue background</div>
<div class="bg-secondary">Medium blue background</div>
```

#### Borders
```html
<div class="border border-cyan">Cyan border</div>
<div class="border border-teal">Teal border</div>
<div class="border border-orange">Orange border</div>
```

#### Shadows & Glows
```html
<div class="shadow-glow">Cyan glow effect</div>
<div class="shadow-glow-orange">Orange glow effect</div>
```

## Component Examples

### Buttons

#### Default Button
```html
<button>Click Me</button>
```

#### Primary Button
```html
<button class="primary">Primary Action</button>
```

#### Accent Button
```html
<button class="accent">Secondary Action</button>
```

### Cards
```html
<div class="card">
  <h2>Card Title</h2>
  <p>Card content goes here...</p>
</div>
```

### Navigation
```html
<nav>
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
</nav>
```

### Badges
```html
<span class="badge">Info</span>
<span class="badge success">Success</span>
<span class="badge warning">Warning</span>
<span class="badge error">Error</span>
```

### Tables
```html
<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </tbody>
</table>
```

## Animations

### Glow Pulse
```html
<h1 class="glow">Glowing Title</h1>
```

Creates a pulsing glow effect on text.

### Scan Line
```html
<div class="scan">
  <p>Content with scan line effect</p>
</div>
```

Adds an animated scan line across the element.

## CSS Variables

All colors and values are defined as CSS custom properties, making them easy to override:

```css
:root {
  --sc-primary-bright: #00d9ff;
  --sc-secondary-darkest: #0a1628;
  --sc-font-primary: "Orbitron", "Audiowide", "Courier New", monospace;
  /* ... more variables */
}
```

You can override any variable in your own CSS:

```css
:root {
  --sc-primary-bright: #00ffff; /* Your custom bright cyan */
}
```

## Responsive Design

The theme doesn't enforce specific responsive breakpoints, but works well with Tailwind's standard breakpoints:

```html
<!-- Example with Tailwind -->
<div class="text-sm md:text-base lg:text-lg">Responsive text</div>
```

## Accessibility

- All text has sufficient contrast against dark backgrounds
- Focus states are clearly visible with glow effects
- Buttons have clear hover/active states
- Font sizes are readable on all devices

## Customization

To customize the theme for your specific needs:

1. **Copy** the CSS file to your project
2. **Modify** color variables in the `:root` selector
3. **Add** custom classes or override existing ones
4. **Test** across your components

Example customization:
```css
:root {
  --sc-primary-bright: #00ffff; /* Your custom cyan */
  --sc-accent-orange: #ff8800; /* Your custom orange */
  --sc-font-primary: "Space Mono", monospace; /* Your custom font */
}
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Variables (CSS Custom Properties) support required
- CSS Grid and Flexbox support recommended

## References

- Color inspiration: [Star Citizen Game UI](https://starcitizen.tools/)
- Futuristic design principles: Sci-fi UI/UX patterns
- Typography: Monospace futuristic fonts

---

**Created for Regolith Co.** - A Star Citizen Mining Companion App
