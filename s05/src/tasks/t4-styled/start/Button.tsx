import styled, { css } from 'styled-components';
import type { ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'outline' | 'danger';
type Size = 'sm' | 'md';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  $variant?: Variant;
  $size?: Size;
}

const buttonStyles = css<{ $variant?: Variant; $size?: Size }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid #3b5bdb;
  padding: ${({ $size = 'md' }) => ($size === 'sm' ? '8px 12px' : '10px 16px')};
  ${({ theme, $variant = 'primary' }) => {
    if ($variant === 'outline') {
      return `
        background: transparent;
        color: ${theme.text};
        border-color: ${theme.border};
      `;
    }

    if ($variant === 'danger') {
      return `
        background: ${theme.danger};
        border-color: ${theme.danger};
        color: ${theme.dangerText};
      `;
    }

    return `
      background: ${theme.primary};
      border-color: ${theme.primary};
      color: ${theme.primaryText};
    `;
  }}

  &:hover:not(:disabled) {
    ${({ theme, $variant = 'primary' }) => {
      if ($variant === 'outline') return `background: ${theme.surface};`;
      if ($variant === 'danger') return `background: ${theme.dangerHover};`;
      return `background: ${theme.primaryHover};`;
    }}
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'variant' && prop !== 'size' && prop !== '$variant' && prop !== '$size',
}).attrs<Props>((props) => ({
  $variant: props.variant ?? 'primary',
  $size: props.size ?? 'md',
}))<Props>`
  ${buttonStyles}
`;

export const IconButton = styled(Button)`
  width: 40px;
  min-width: 40px;
  height: 40px;
  min-height: 40px;
  padding: 0;
  border-radius: 50%;
`;
