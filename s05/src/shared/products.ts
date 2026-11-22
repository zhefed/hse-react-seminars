export interface Product {
  id: number;
  title: string;
  price: number;
  emoji: string;
  isNew?: boolean;
}

export const PRODUCTS: Product[] = [
  { id: 1, title: 'Беспроводные наушники', price: 7990, emoji: '🎧', isNew: true },
  { id: 2, title: 'Механическая клавиатура', price: 11490, emoji: '⌨️' },
  { id: 3, title: 'Настольная лампа', price: 2590, emoji: '💡' },
];

export const formatPrice = (v: number) =>
  new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(v);
