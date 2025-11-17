import React from 'react';
import cn from 'clsx';

interface UtilityButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
  disabled?: boolean;
  variant?: 'square' | 'round';
  className?: string;
  size?: number;
}

export const UtilityButton: React.FC<UtilityButtonProps> = ({
  children,
  onClick,
  selected = false,
  disabled = false,
  variant = 'square',
  className = '',
  size = 40,
}) => {
  const base = `inline-flex items-center justify-center border transition-colors duration-200`;

  const shape = variant === 'round' ? 'rounded-full' : 'rounded-none';

  const states = cn({
    'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed': disabled,
    'bg-gray-800 border-gray-800 text-white': selected && !disabled,
    'bg-white border-gray-300 text-gray-700 hover:border-gray-500 hover:bg-gray-50':
      !selected && !disabled,
  });

  return (
    <button
      style={{ width: size, height: size }}
      className={cn(base, shape, states, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
