/**
 * React hooks for using the Star Citizen theme
 * Makes it easy to consume theme values in components
 */

import React from 'react';
import { applyThemeToElement, starCitizenTheme, themeUtils } from './theme';

/**
 * Create a theme context
 */
export const ThemeContext = React.createContext(starCitizenTheme);

export interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: typeof starCitizenTheme;
  target?: HTMLElement | null;
}

/**
 * Provider component to wrap your app
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme = starCitizenTheme, target }) => {
  React.useEffect(() => {
    const root = target ?? (typeof document !== 'undefined' ? document.documentElement : null)

    if (root) {
      applyThemeToElement(theme, root)
      root.setAttribute('data-theme', 'star-citizen')
    }
  }, [theme, target])

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Hook to access the theme object
 */
export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    console.warn('useTheme must be used within ThemeProvider');
    return starCitizenTheme;
  }
  return context;
};

/**
 * Hook to get button styles
 */
export const useButtonStyles = (variant: 'default' | 'primary' | 'accent' = 'default') => {
  return themeUtils.getButtonStyles(variant);
};

/**
 * Hook to get card styles
 */
export const useCardStyles = () => {
  return themeUtils.getCardStyles();
};

/**
 * Hook to get input styles
 */
export const useInputStyles = () => {
  return themeUtils.getInputStyles();
};

/**
 * Hook to get input focus styles
 */
export const useInputFocusStyles = () => {
  return themeUtils.getInputFocusStyles();
};

/**
 * Hook to get badge styles
 */
export const useBadgeStyles = (variant: 'default' | 'success' | 'warning' | 'error' = 'default') => {
  return themeUtils.getBadgeStyles(variant);
};

/**
 * Hook to get heading styles with glow effect
 */
export const useHeadingStyles = () => {
  return themeUtils.getHeadingStyles();
};

/**
 * Hook to get a specific color
 */
export const useThemeColor = (path: string, defaultValue?: string) => {
  return themeUtils.getColor(path, defaultValue);
};

/**
 * Hook to get glow effect
 */
export const useGlowEffect = (color: 'cyan' | 'orange' = 'cyan') => {
  return themeUtils.getGlow(color);
};

/**
 * Prebuilt styled components using React
 */

export const StyledButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default' | 'primary' | 'accent' }
>(({ variant = 'default', style, ...props }, ref) => {
  const buttonStyles = useButtonStyles(variant);
  
  return (
    <button
      ref={ref}
      style={{ ...buttonStyles, ...style }}
      {...props}
    />
  );
});
StyledButton.displayName = 'StyledButton';

export const StyledCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ style, ...props }, ref) => {
  const cardStyles = useCardStyles();
  
  return (
    <div
      ref={ref}
      style={{ ...cardStyles, ...style } as any}
      {...props}
    />
  );
});
StyledCard.displayName = 'StyledCard';

export const StyledInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ style, onFocus, onBlur, ...props }, ref) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const inputStyles = useInputStyles();
  const focusStyles = useInputFocusStyles();
  
  return (
    <input
      ref={ref}
      style={{
        ...inputStyles,
        ...(isFocused && focusStyles),
        ...style,
      } as any}
      onFocus={(e) => {
        setIsFocused(true);
        onFocus?.(e);
      }}
      onBlur={(e) => {
        setIsFocused(false);
        onBlur?.(e);
      }}
      {...props}
    />
  );
});
StyledInput.displayName = 'StyledInput';

export const StyledBadge = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & { variant?: 'default' | 'success' | 'warning' | 'error' }
>(({ variant = 'default', style, ...props }, ref) => {
  const badgeStyles = useBadgeStyles(variant);
  
  return (
    <span
      ref={ref}
      style={{ ...badgeStyles, ...style } as any}
      {...props}
    />
  );
});
StyledBadge.displayName = 'StyledBadge';

export const StyledHeading = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & { level?: 1 | 2 | 3 | 4 | 5 | 6 }
>(({ level = 1, style, ...props }, ref) => {
  const headingStyles = useHeadingStyles();
  const Heading = `h${level}` as keyof JSX.IntrinsicElements;
  
  return React.createElement(
    Heading,
    {
      ref,
      style: { ...headingStyles, ...style } as any,
      ...props,
    },
    props.children
  );
});
StyledHeading.displayName = 'StyledHeading';

export default {
  useTheme,
  useButtonStyles,
  useCardStyles,
  useInputStyles,
  useInputFocusStyles,
  useBadgeStyles,
  useHeadingStyles,
  useThemeColor,
  useGlowEffect,
  ThemeProvider,
  ThemeContext,
  StyledButton,
  StyledCard,
  StyledInput,
  StyledBadge,
  StyledHeading,
};
