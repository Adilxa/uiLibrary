import { ThemeProvider } from 'styled-components';
import TogglerButton from './Components/TogglerButton';
import GlobalStyle from './styles/global';
import ThemeContext from './Contexts/ThemeContext';
import { lightTheme, darkTheme } from './assets/theme';
import useThemeMode from './hooks/useThemeMode';
import Button from './Components/Button';

function App() {
  const { theme, themeToggler } = useThemeMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <div style={{ display: 'flex', gap: '10rem' }}>
          <TogglerButton themeToggler={themeToggler} />
          <Button />
        </div>
      </ThemeProvider>
    </ThemeContext >
  );
}

export default App;