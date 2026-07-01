# Star Citizen Theme Setup Guide

Complete guide to implementing the Star Citizen futuristic theme in your project.

## Quick Start

### 1. CSS Only (Minimal Setup)

```html
<!-- In your HTML head -->
<link rel="stylesheet" href="path/to/theme/starCitizen.css">
```

Then use the classes and HTML structure as shown in `example.html`.

### 2. Tailwind CSS

Install Tailwind CSS in your project:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Extend your `tailwind.config.js`:
```javascript
module.exports = {
  extend: {
    colors: {
      'sc': {
        'bright': '#00d9ff',
        'teal': '#00b8d4',
        // ... see theme/tailwind.config.js for full list
      }
    },
    fontFamily: {
      'sc-primary': ['Orbitron', 'Audiowide', 'Courier New', 'monospace'],
      'sc-secondary': ['Inter', 'Segoe UI', '-apple-system', 'sans-serif'],
    },
    // ... more config
  }
};
```

Then in your CSS:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. React with TypeScript

#### Setup ThemeProvider

```typescript
// App.tsx
import { ThemeProvider } from '@regolithco/common/theme';
import './styles.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        {/* Your components */}
      </div>
    </ThemeProvider>
  );
}

export default App;
```

#### Use Styled Components

```typescript
// MyComponent.tsx
import { StyledButton, StyledCard, StyledInput } from '@regolithco/common/theme';

export function MyComponent() {
  return (
    <StyledCard>
      <h2>My Card</h2>
      <StyledInput placeholder="Enter text..." />
      <StyledButton variant="primary">Submit</StyledButton>
    </StyledCard>
  );
}
```

#### Use Theme Hooks

```typescript
// MyComponent.tsx
import { useTheme, useButtonStyles, useThemeColor } from '@regolithco/common/theme';

export function MyComponent() {
  const theme = useTheme();
  const buttonStyles = useButtonStyles('primary');
  const primaryColor = useThemeColor('primary.bright');

  return (
    <div style={{ background: theme.gradients.background }}>
      <button style={buttonStyles}>Click Me</button>
      <p style={{ color: primaryColor }}>Colored text</p>
    </div>
  );
}
```

### 4. Styled Components / Emotion

#### Using Theme Object

```typescript
import styled from 'styled-components';
import { starCitizenTheme } from '@regolithco/common/theme';

const StyledCard = styled.div`
  background: ${starCitizenTheme.colors.secondary.dark};
  border: 1px solid ${starCitizenTheme.colors.primary.teal};
  padding: ${starCitizenTheme.spacing.lg};
  box-shadow: ${starCitizenTheme.shadows.elevation};
  
  &:hover {
    border-color: ${starCitizenTheme.colors.primary.bright};
    box-shadow: ${starCitizenTheme.shadows.glowCyan};
  }
`;

export function MyCard() {
  return <StyledCard>My styled card</StyledCard>;
}
```

## File Structure

```
theme/
├── starCitizen.css          # Main CSS file with all styles
├── tailwind.config.js       # Tailwind CSS configuration
├── theme.ts                 # TypeScript theme object & utilities
├── useTheme.tsx             # React hooks & styled components
├── index.ts                 # Main export file
├── example.html             # Interactive demo page
└── README.md                # Detailed documentation
```

## Color Reference

All colors from the Star Citizen theme:

| Color | Value | Usage |
|-------|-------|-------|
| Bright Cyan | `#00d9ff` | Primary accents, highlights |
| Rich Teal | `#00b8d4` | Borders, secondary accents |
| Dark Blue | `#0f1f3c` | Card/background colors |
| Orange | `#ff6600` | Call-to-action, warnings |
| Success Green | `#00ff88` | Success states |
| Error Red | `#ff3333` | Error states |
| Off-white | `#e8eef2` | Primary text |

Access in TypeScript:
```typescript
import { starCitizenTheme } from '@regolithco/common/theme';

const color = starCitizenTheme.colors.primary.bright; // #00d9ff
```

## Common Patterns

### Button with Glow

```html
<button class="primary" style="box-shadow: 0 0 20px rgba(0, 217, 255, 0.5);">
  Click Me
</button>
```

### Card with Title

```html
<div class="card">
  <h2>Card Title</h2>
  <p>Card content goes here...</p>
</div>
```

### Input with Focus Effect

```html
<input 
  type="text" 
  placeholder="Enter text..."
  style="transition: all 0.3s ease;"
/>
```

### Badge with Status

```html
<span class="badge success">Success</span>
<span class="badge warning">Warning</span>
<span class="badge error">Error</span>
```

### Glowing Text Animation

```html
<h1 class="glow">Glowing Title</h1>
```

## Customization

### Override CSS Variables

Add this to your CSS file to override colors:

```css
:root {
  --sc-primary-bright: #00ffff; /* Your custom bright cyan */
  --sc-accent-orange: #ff8800; /* Your custom orange */
  --sc-font-primary: "Space Mono", monospace; /* Your custom font */
}
```

### Extend Theme in TypeScript

```typescript
import { starCitizenTheme } from '@regolithco/common/theme';

export const customTheme = {
  ...starCitizenTheme,
  colors: {
    ...starCitizenTheme.colors,
    primary: {
      ...starCitizenTheme.colors.primary,
      bright: '#00ffff', // Custom bright
    },
  },
};
```

### Modify Tailwind Preset

Create a custom preset:

```javascript
// tailwind.config.js
const baseConfig = require('@regolithco/common/theme/tailwind.config.js');

module.exports = {
  presets: [baseConfig],
  theme: {
    extend: {
      colors: {
        'custom-primary': '#ff00ff',
      },
    },
  },
};
```

## Browser Support

- Chrome/Edge 88+
- Firefox 87+
- Safari 14+

Requires:
- CSS Custom Properties (--variables)
- CSS Grid
- CSS Flexbox

## Performance Tips

1. **Minimize CSS**: The base CSS file is ~8KB (minified)
2. **Use CSS Variables**: Faster theme switching than class swapping
3. **Lazy Load Fonts**: Orbitron is large; consider loading asynchronously:
   ```css
   @font-face {
     font-family: 'Orbitron';
     src: url('...') format('woff2');
     font-display: swap;
   }
   ```

4. **Optimize Animations**: Use `will-change` for animated elements:
   ```css
   .glow {
     will-change: text-shadow;
     animation: glow-pulse 2s ease-in-out infinite;
   }
   ```

## Font Setup

The theme uses these fonts (in order of preference):

### Headings (Primary)
1. **Orbitron** - Geometric, futuristic
   - [Google Fonts](https://fonts.google.com/specimen/Orbitron)
   - ```css
     @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
     ```

2. **Audiowide** - Monospace, techy
   - [Google Fonts](https://fonts.google.com/specimen/Audiowide)
   - ```css
     @import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
     ```

3. **Courier New** - Fallback monospace

### Body (Secondary)
1. **Inter** - Modern, clean
   - [Google Fonts](https://fonts.googleapis.com/css2?family=Inter)

2. **Segoe UI** - Windows default

3. **System fonts** - -apple-system for macOS/iOS

Add fonts to your HTML `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Audiowide&family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
```

## Testing the Theme

Open `example.html` in your browser to see all components and colors in action:
```bash
open theme/example.html
# or
start theme/example.html
```

## Troubleshooting

### Colors not showing?
- Ensure CSS file is imported correctly
- Check that CSS Custom Properties (CSS Variables) are supported
- Verify no conflicting CSS is overriding the theme

### Fonts not loading?
- Add Google Fonts import to `<head>`
- Check font URLs are accessible
- Use `font-display: swap` to prevent layout shift

### React hooks not working?
- Ensure `<ThemeProvider>` wraps your component tree
- Check that you're importing from the correct path
- Verify React version is 16.8+ (hooks requirement)

### Glow effects not visible?
- Increase `box-shadow` or `text-shadow` values
- Check if container has `overflow: hidden`
- Ensure background has enough contrast

## License

This theme is part of @regolithco/common and follows the same MIT license.

## Support

For issues, questions, or suggestions:
- Check the README.md in the theme folder
- Review example.html for implementation examples
- Open an issue on [GitHub](https://github.com/RegolithCo/RegolithCo-Common)

---

**Star Citizen Theme** — Bringing futuristic space mining UI to your web applications.
