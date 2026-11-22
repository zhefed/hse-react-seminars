import './tailwind.css';
import { useState } from 'react';
import { formatPrice, PRODUCTS } from '../../../shared/products';
import { cn } from './cn';

// TODO 1. Сетка карточек: 1 колонка на мобильном, 2 от sm, 3 от lg (gap-4, отступы p-6).
// TODO 2. Карточка: фон, рамка, скругление rounded-card, тень, подъём при hover.
// TODO 3. Бейдж «Новинка» для product.isNew.
// TODO 4. Кнопка с вариантами primary | ghost: объект вариантов + функция cn() из ./cn.ts (уже готова).
//         Preflight в задании отключён — добавьте кнопке border-0 и font-[inherit].
// TODO 5. Тёмная тема: data-theme="dark" на обёртке и классы dark:… ; переключатель.
export default function Demo() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const buttonVariants = {
    primary: 'cursor-pointer bg-brand text-white hover:bg-brand-hover',
    ghost: 'cursor-pointer border border-slate-300 bg-transparent text-slate-800 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-700',
  };

  return (
    <div data-theme={theme} className="min-h-screen bg-slate-100 p-6 font-[system-ui] text-slate-900 transition-colors dark:bg-slate-900 dark:text-slate-100">
      <button
        type="button"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className={cn('mb-4 cursor-pointer rounded-lg border-0 px-4 py-2 font-[inherit] bg-white text-slate-900 dark:bg-slate-800 dark:text-slate-100')}
      >
        {theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}
      </button>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((p) => (
          <article
            key={p.id}
            className="rounded-card border border-slate-200 bg-white p-6 shadow-md transition-transform hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-800"
          >
            <div className="flex items-start justify-between">
              <div className="text-4xl">{p.emoji}</div>
              {p.isNew && (
                <span className="rounded-full bg-brand px-3 py-1 text-xs text-white">Новинка</span>
              )}
            </div>
            <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">{formatPrice(p.price)}</p>
            <button
              type="button"
              className={cn('mt-4 rounded-lg border-0 px-4 py-2 font-[inherit]', buttonVariants.primary)}
            >
              В корзину
            </button>
            <button
              type="button"
              className={cn('ml-2 mt-4 rounded-lg px-4 py-2 font-[inherit]', buttonVariants.ghost)}
            >
              Подробнее
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
