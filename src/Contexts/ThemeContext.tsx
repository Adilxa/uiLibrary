import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../assets/theme';
import useThemeMode from '../hooks/useThemeMode';

const ThemeContext: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { theme } = useThemeMode();

    const themeMode = theme === 'dark' ? darkTheme : lightTheme;

    return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>;
};

export default ThemeContext;