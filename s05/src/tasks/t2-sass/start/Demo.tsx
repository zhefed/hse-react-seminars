import { Button, type Size, type Variant } from './Button';

const variants: Variant[] = ['primary', 'secondary', 'danger'];
const sizes: Size[] = ['sm', 'md', 'lg'];

export default function Demo() {
  return (
    <div style={{ padding: 24, display: 'grid', gap: 16, fontFamily: 'system-ui, sans-serif' }}>
      {variants.map((v) => (
        <div key={v} style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
          {sizes.map((s) => (
            <Button key={s} variant={v} size={s}>
              {v} / {s}
            </Button>
          ))}
          <Button variant={v} disabled>
            disabled
          </Button>
        </div>
      ))}
    </div>
  );
}
