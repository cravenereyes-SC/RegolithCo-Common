/**
 * Star Citizen Theme - Main Export
 * 
 * Usage:
 * - CSS: import 'path/to/theme/starCitizen.css'
 * - TypeScript: import { starCitizenTheme } from 'path/to/theme'
 * - React: import { useTheme, ThemeProvider } from 'path/to/theme'
 * - Tailwind: extend your config with tailwind.config.js
 */

// Export theme configuration
export {
  starCitizenTheme,
  themeUtils,
  createThemeVariables,
  applyThemeToElement,
  applyThemeToDocument,
  type ThemeProps,
  type ButtonProps,
  type CardProps,
} from './theme';

// Export React hooks and components
export {
  ThemeContext,
  ThemeProvider,
  useTheme,
  useButtonStyles,
  useCardStyles,
  useInputStyles,
  useInputFocusStyles,
  useBadgeStyles,
  useHeadingStyles,
  useThemeColor,
  useGlowEffect,
  StyledButton,
  StyledCard,
  StyledInput,
  StyledBadge,
  StyledHeading,
} from './useTheme';

export default { message: 'Import specific exports from this theme package' };
