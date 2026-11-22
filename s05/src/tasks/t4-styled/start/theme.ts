export interface AppTheme {
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

export const lightTheme: AppTheme = {
  pageBg: '#f3f6ff',
  surface: '#ffffff',
  text: '#1c2430',
  textMuted: '#536176',
  border: '#dfe7ff',
  primary: '#3b5bdb',
  primaryHover: '#2948c4',
  primaryText: '#ffffff',
  danger: '#dc3545',
  dangerHover: '#b42637',
  dangerText: '#ffffff',
};

export const darkTheme: AppTheme = {
  pageBg: '#121826',
  surface: '#1b2332',
  text: '#edf2ff',
  textMuted: '#aab7d4',
  border: '#2f3b56',
  primary: '#6f8cff',
  primaryHover: '#8aa2ff',
  primaryText: '#0a1020',
  danger: '#ff5b6d',
  dangerHover: '#ff7f8d',
  dangerText: '#12080b',
};
