/**
 * Star Citizen Theme Configuration
 * Futuristic UI theme with bright teals, dark blues, and neon effects
 */

export const starCitizenTheme = {
  colors: {
    // Primary - Teals & Cyans
    primary: {
      bright: '#00d9ff',    // Bright cyan
      teal: '#00b8d4',      // Rich teal
      darkTeal: '#0088a0',  // Deep teal
    },
    
    // Secondary - Dark Blues
    secondary: {
      darkest: '#0a1628',   // Deep space black-blue
      dark: '#0f1f3c',      // Dark blue
      medium: '#1a2f4d',    // Medium blue
      light: '#2a4166',     // Light blue
    },
    
    // Accents
    accent: {
      orange: '#ff6600',    // Bright orange
      gold: '#ffa500',      // Gold accent
      red: '#ff3333',       // Warning red
      green: '#00ff88',     // Success green
    },
    
    // Neutrals
    neutral: {
      white: '#e8eef2',     // Off-white
      light: '#a8b5c4',     // Light gray
      medium: '#7a8699',    // Medium gray
      dark: '#4a5568',      // Dark gray
    },
  },

  gradients: {
    primary: 'linear-gradient(135deg, #00d9ff 0%, #00b8d4 100%)',
    dark: 'linear-gradient(135deg, #0f1f3c 0%, #0a1628 100%)',
    accent: 'linear-gradient(135deg, #ff6600 0%, #ffa500 100%)',
    background: 'linear-gradient(180deg, #0a1628 0%, #0f1f3c 50%, #0a1628 100%)',
  },

  fonts: {
    primary: {
      family: '"Orbitron", "Audiowide", "Courier New", monospace',
      weight: 700,
      letterSpacing: '0.1em',
    },
    secondary: {
      family: '"Inter", "Segoe UI", "-apple-system", sans-serif',
      weight: 400,
      letterSpacing: '0.05em',
    },
  },

  shadows: {
    glowCyan: '0 0 10px rgba(0, 217, 255, 0.3), 0 0 20px rgba(0, 217, 255, 0.1)',
    glowCyanLarge: '0 0 20px rgba(0, 217, 255, 0.5), 0 0 40px rgba(0, 217, 255, 0.2)',
    glowOrange: '0 0 10px rgba(255, 102, 0, 0.3), 0 0 20px rgba(255, 102, 0, 0.1)',
    elevation: '0 10px 30px rgba(0, 0, 0, 0.5)',
  },

  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },

  // Button variants
  buttons: {
    default: {
      padding: '1rem 1.5rem',
      border: '2px solid #00d9ff',
      background: 'transparent',
      color: '#00d9ff',
      fontSize: '0.9rem',
      fontWeight: 700,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    primary: {
      background: 'linear-gradient(135deg, #00d9ff 0%, #00b8d4 100%)',
      color: '#0a1628',
      border: '2px solid #00d9ff',
    },
    accent: {
      border: '2px solid #ff6600',
      color: '#ff6600',
    },
  },

  // Card styling
  card: {
    background: '#0f1f3c',
    border: '1px solid #00b8d4',
    borderRadius: '8px',
    padding: '1.5rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
    transition: 'all 0.3s ease',
  },

  // Input styling
  input: {
    background: '#1a2f4d',
    border: '2px solid #00b8d4',
    color: '#e8eef2',
    padding: '1rem',
    borderRadius: '4px',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    focusBorder: '#00d9ff',
    focusBackground: '#2a4166',
    focusShadow: '0 0 10px rgba(0, 217, 255, 0.3), 0 0 20px rgba(0, 217, 255, 0.1)',
  },

  // Navigation styling
  navbar: {
    background: 'linear-gradient(90deg, #0a1628 0%, #0f1f3c 100%)',
    borderBottom: '2px solid #00b8d4',
    padding: '1rem 2rem',
  },

  // Badge styling
  badges: {
    default: {
      padding: '0.5rem 1rem',
      background: '#1a2f4d',
      border: '1px solid #00d9ff',
      color: '#00d9ff',
      borderRadius: '20px',
      fontSize: '0.85rem',
      fontWeight: 600,
    },
    success: {
      borderColor: '#00ff88',
      color: '#00ff88',
    },
    warning: {
      borderColor: '#ff6600',
      color: '#ff6600',
    },
    error: {
      borderColor: '#ff3333',
      color: '#ff3333',
    },
  },

  // Table styling
  table: {
    headerBackground: '#1a2f4d',
    headerBorder: '2px solid #00b8d4',
    headerColor: '#00d9ff',
    rowBorder: '1px solid #2a4166',
    hoverBackground: '#2a4166',
    hoverShadow: 'inset 0 0 15px rgba(0, 217, 255, 0.1)',
  },
} as const;

/**
 * Theme utilities for React components
 */
export const themeUtils = {
  /**
   * Get a color value from the theme
   */
  getColor: (path: string, defaultValue?: string): string => {
    const parts = path.split('.');
    let value: any = starCitizenTheme.colors;
    
    for (const part of parts) {
      value = value?.[part];
      if (!value) return defaultValue || '#00d9ff';
    }
    
    return value;
  },

  /**
   * Create a glow effect CSS string
   */
  getGlow: (color: 'cyan' | 'orange' = 'cyan'): string => {
    return color === 'orange' 
      ? starCitizenTheme.shadows.glowOrange 
      : starCitizenTheme.shadows.glowCyan;
  },

  /**
   * Create button styles object
   */
  getButtonStyles: (variant: 'default' | 'primary' | 'accent' = 'default'): React.CSSProperties => {
    const baseStyles = starCitizenTheme.buttons.default as any;
    const variantStyles = starCitizenTheme.buttons[variant] as any;
    
    return {
      ...baseStyles,
      ...variantStyles,
      fontFamily: starCitizenTheme.fonts.primary.family,
    } as React.CSSProperties;
  },

  /**
   * Create card styles object
   */
  getCardStyles: (): React.CSSProperties => {
    return starCitizenTheme.card as any;
  },

  /**
   * Create input styles object
   */
  getInputStyles: (): React.CSSProperties => {
    const { focusShadow, focusBorder, focusBackground, ...inputStyles } = starCitizenTheme.input;
    return inputStyles as any;
  },

  /**
   * Get focus styles for inputs
   */
  getInputFocusStyles: (): React.CSSProperties => {
    return {
      borderColor: starCitizenTheme.input.focusBorder,
      background: starCitizenTheme.input.focusBackground,
      boxShadow: starCitizenTheme.input.focusShadow,
      outline: 'none',
    };
  },

  /**
   * Create badge styles object
   */
  getBadgeStyles: (variant: 'default' | 'success' | 'warning' | 'error' = 'default'): React.CSSProperties => {
    const baseStyles = starCitizenTheme.badges.default as any;
    const variantStyles = starCitizenTheme.badges[variant] as any;
    
    return {
      ...baseStyles,
      ...variantStyles,
      fontFamily: starCitizenTheme.fonts.primary.family,
    } as React.CSSProperties;
  },

  /**
   * Create heading styles with glow
   */
  getHeadingStyles: (): React.CSSProperties => {
    return {
      fontFamily: starCitizenTheme.fonts.primary.family,
      fontWeight: starCitizenTheme.fonts.primary.weight,
      letterSpacing: starCitizenTheme.fonts.primary.letterSpacing,
      textTransform: 'uppercase',
      color: starCitizenTheme.colors.primary.bright,
      textShadow: `0 0 10px rgba(0, 217, 255, 0.5)`,
    };
  },
};

/**
 * TypeScript interfaces for styled components
 */
export interface ThemeProps {
  variant?: 'default' | 'primary' | 'accent';
  theme?: typeof starCitizenTheme;
}

export interface ButtonProps extends ThemeProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export interface CardProps extends ThemeProps {
  children: React.ReactNode;
  title?: string;
}

export default starCitizenTheme;
