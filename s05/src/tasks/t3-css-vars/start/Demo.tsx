import { useEffect, useState } from 'react';
import './tokens.css';
import styles from './Card.module.css';

// TODO 1. Создайте tokens.css: переменные --color-* в :root и переопределение в [data-theme='dark'].
// TODO 2. Замените все цвета в Card.module.css на var(--color-…).
// TODO 3. Хук useTheme(): начальное значение — из prefers-color-scheme,
//         при изменении ставит document.documentElement.dataset.theme.
// TODO 4. Кнопка переключает тему; добавьте плавный transition фона и цвета.

function useTheme() {
  const [theme, setTheme] = useState<string>(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return [theme, setTheme] as const;
}

export default function Demo() {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h2>Тема на CSS-переменных</h2>
        <p className={styles.muted}>Сейчас тема: {theme}</p>
        <button className={styles.button} onClick={toggleTheme}>
          Переключить тему
        </button>
      </div>
    </div>
  );
}
