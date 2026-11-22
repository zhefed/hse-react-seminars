import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Button, IconButton } from './Button';
import { darkTheme, lightTheme } from './theme';
import { useState } from 'react';

// TODO 1. theme.ts: интерфейс AppTheme, объекты light и dark.
// TODO 2. styled.d.ts: расширьте DefaultTheme, чтобы props.theme был типизирован.
// TODO 3. Button на styled-components: варианты primary | outline | danger,
//         размеры sm | md через transient props ($variant, $size) и хелпер css.
// TODO 4. :hover, :focus-visible, :disabled.
// TODO 5. IconButton = styled(Button) — круглая кнопка 40×40.
// TODO 6. Кнопка-ссылка через проп as="a".
// TODO 7. createGlobalStyle для фона страницы + переключатель темы через ThemeProvider.

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: ${({ theme }) => theme.pageBg};
  }
`;

export default function Demo() {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');
  const theme = themeName === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div style={{ minHeight: '100vh', padding: 24, display: 'flex', alignItems: 'flex-start', gap: 12, fontFamily: 'system-ui, sans-serif', color: theme.text }}>
        <Button>Купить</Button>
        <Button variant="outline">Подробнее</Button>
        <Button variant="danger" size="sm">Удалить</Button>
        <Button as="a" href="#buy" variant="outline">Ссылка-кнопка</Button>
        <IconButton
          aria-label="Переключить тему"
          onClick={() => setThemeName((value) => (value === 'light' ? 'dark' : 'light'))}
        >
          {themeName === 'light' ? '☾' : '☀'}
        </IconButton>
      </div>
    </ThemeProvider>
  );
}
