import React from 'react';
import { Check } from 'lucide-react';

interface ButtonProps {
  type: 'button' | 'submit';
  onClick?: () => void;
  className: string;
  label: string;
  disabled?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ type, onClick, className, label, disabled, isLoading }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {isLoading ? (
        <>
          <span className="mr-2">{label}</span>
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
        </>
      ) : (
        <>
          <Check className="w-4 h-4 mr-2" />
          {label}
        </>
      )}
    </button>
  );
};

export default Button;