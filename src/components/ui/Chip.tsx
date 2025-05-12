import React from 'react';

interface ChipProps {
  text: string;
  color?: 'red' | 'green' | 'blue' | 'yellow' | 'purple' | 'gray';
  size?: 'sm' | 'md';
  onClose?: () => void;
}

const Chip: React.FC<ChipProps> = ({
  text,
  color = 'gray',
  size = 'md',
  onClose,
}) => {
  const colorClasses = {
    red: 'bg-red-100 text-red-600',
    green: 'bg-green-100 text-green-600',
    blue: 'bg-blue-100 text-blue-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    purple: 'bg-purple-100 text-purple-600',
    gray: 'bg-gray-100 text-gray-600',
  };
  
  const sizeClasses = {
    sm: 'text-xs py-1 px-2',
    md: 'text-sm py-1 px-3',
  };
  
  return (
    <span className={`
      inline-flex items-center rounded-full font-medium
      ${colorClasses[color]}
      ${sizeClasses[size]}
    `}>
      {text}
      {onClose && (
        <button 
          onClick={onClose}
          className="ml-1.5 text-current opacity-60 hover:opacity-100"
        >
          &times;
        </button>
      )}
    </span>
  );
};

export default Chip;