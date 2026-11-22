import type { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

export type Variant = 'primary' | 'secondary' | 'danger';
export type Size = 'sm' | 'md' | 'lg';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export function Button({ variant = 'primary', size = 'md', className, ...rest }: Props) {
  // Классы вариантов и размеров уже подключены — осталось написать для них SCSS
  return <button className={clsx(styles.button, styles[variant], styles[size], className)} {...rest} />;
}
