'use client';

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SharedProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  fullWidth?: boolean;
};

type AnchorButtonProps = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className' | 'href'> & {
    href: string;
  };

type NativeButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> & {
    href?: never;
  };

export function Button(props: AnchorButtonProps): ReactElement;
export function Button(props: NativeButtonProps): ReactElement;
export function Button(props: AnchorButtonProps | NativeButtonProps) {
  const { children, variant = 'primary', className, fullWidth = false } = props;

  const styles = cn(
    'inline-flex items-center justify-center gap-2 rounded-[12px] px-6 py-3 text-sm font-semibold transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2',
    fullWidth && 'w-full',
    variant === 'primary' && 'bg-brand-600 text-white shadow-soft hover:bg-brand-700',
    variant === 'secondary' &&
      'border border-border bg-surface text-ink shadow-soft hover:border-brand-600 hover:text-brand-700',
    variant === 'ghost' && 'text-charcoal hover:bg-whisper',
    className,
  );

  if ('href' in props && props.href) {
    const { href, target, rel, fullWidth: _fullWidth, ...anchorProps } = props;

    return (
      <a href={href} target={target} rel={rel} className={styles} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { href: _href, type = 'button', fullWidth: _fullWidth, ...buttonProps } =
    props as NativeButtonProps;

  return (
    <button type={type} className={styles} {...buttonProps}>
      {children}
    </button>
  );
}