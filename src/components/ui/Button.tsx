import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  showArrow?: boolean;
  disabled?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  type = 'button',
  className = '',
  showArrow = false,
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    'focus-ring inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-brand-cyan text-brand-black hover:bg-cyan-300 hover:shadow-lg hover:shadow-brand-cyan/20',
    secondary: 'bg-brand-slate text-brand-offwhite hover:bg-brand-slate/80 border border-white/10',
    outline: 'border-2 border-brand-cyan text-brand-cyan hover:bg-brand-cyan/10',
    ghost: 'text-brand-cyan hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${classes}`}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`group ${classes}`}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`group ${classes}`}>
      {content}
    </button>
  );
}
