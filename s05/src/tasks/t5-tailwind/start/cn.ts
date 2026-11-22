import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// clsx — условные классы; twMerge — разрешает конфликты (px-2 + px-4 → px-4)
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
