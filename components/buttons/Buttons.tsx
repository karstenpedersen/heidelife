import Link from 'next/link';
import { ReactNode } from 'react';

const classes = {
  base: 'block max-w-max focus:outline-none rounded transition-all ease-in-out duration-300 uppercase font-semibold focus:ring-2',
  disabled: 'opacity-50 cursor-not-allowed',
  pill: 'rounded-full',
  size: {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-8 py-3 text-lg',
  },
  variant: {
    primary: {
      contained: 'bg-accent hover:bg-accent-variant text-surface focus',
      outlined:
        'bg-transparent hover:bg-accent border-2 border-accent text-accent hover:text-surface',
      text: 'text-accent hover:text-accent-variant',
    },
    secondary: {
      contained: 'bg-surface text-accent hover:text-accent-variant',
      outlined:
        'bg-transparent hover:bg-surface border-2 border-surface text-accent hover:text-accent-variant',
      text: 'text-surface hover:text-gray',
    },
    error: {
      contained: 'bg-red-500 hover:bg-red-600 text-surface',
      outlined:
        'bg-transparent hover:bg-red-500 border-2 border-red-500 text-red-500 hover:text-surface',
      text: 'text-red-500',
    },
  },
};

export interface IButton extends React.ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  path: string;
  className?: string;
  variantStyle?: 'contained' | 'outlined' | 'text';
  variant?: 'primary' | 'secondary' | 'error';
  size?: 'sm' | 'md' | 'lg';
  pill?: boolean;
}

const Button: React.FC<IButton> = ({
  children,
  path,
  className,
  variantStyle = 'contained',
  variant = 'primary',
  size = 'md',
  pill,
  disabled,
  ..._
}) => {
  return (
    <Link
      href={path}
      className={`${className}
    ${classes.base}
    ${classes.size[size]}
    ${classes.variant[variant][variantStyle]}
    ${disabled && classes.disabled}
    ${pill && classes.pill}`}
    >
      {children}
    </Link>
  );
};

export default Button;
