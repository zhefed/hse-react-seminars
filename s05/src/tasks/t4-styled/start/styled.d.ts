import 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme {
    pageBg: string;
    surface: string;
    text: string;
    textMuted: string;
    border: string;
    primary: string;
    primaryHover: string;
    primaryText: string;
    danger: string;
    dangerHover: string;
    dangerText: string;
  }
}
