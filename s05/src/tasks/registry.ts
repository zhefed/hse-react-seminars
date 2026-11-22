import { lazy, type ComponentType, type LazyExoticComponent } from 'react';

export interface TaskEntry {
  id: number;
  title: string;
  start: LazyExoticComponent<ComponentType>;
  /** В студенческой версии решений нет */
  solution?: LazyExoticComponent<ComponentType>;
}

// Каждое задание грузится отдельным чанком: стили одного задания
// не попадают на страницу другого (важно для глобального CSS в пр. 1).
export const TASKS: TaskEntry[] = [
  {
    id: 1,
    title: 'CSS Modules: чиним коллизию классов',
    start: lazy(() => import('./t1-css-modules/start/Demo')),
  },
  {
    id: 2,
    title: 'Sass: кнопка с вариантами',
    start: lazy(() => import('./t2-sass/start/Demo')),
  },
  {
    id: 3,
    title: 'CSS-переменные: светлая и тёмная тема',
    start: lazy(() => import('./t3-css-vars/start/Demo')),
  },
  {
    id: 4,
    title: 'styled-components: типизированная тема и варианты',
    start: lazy(() => import('./t4-styled/start/Demo')),
  },
  {
    id: 5,
    title: 'Tailwind CSS v4: та же карточка утилитами',
    start: lazy(() => import('./t5-tailwind/start/Demo')),
  },
  {
    id: 6,
    title: 'MUI: форма на готовых компонентах (бонус)',
    start: lazy(() => import('./t6-mui/start/Demo')),
  },
];
