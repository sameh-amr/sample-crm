import React, { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
  className?: string;
  badge?: {
    text: string;
    color: 'red' | 'green' | 'blue' | 'yellow' | 'purple';
  };
}

const Card: React.FC<CardProps> = ({ title, children, className = '', badge }) => {
  const getBadgeColor = (color: string) => {
    switch (color) {
      case 'red':
        return 'text-red-600';
      case 'green':
        return 'text-green-500';
      case 'blue':
        return 'text-blue-600';
      case 'yellow':
        return 'text-yellow-600';
      case 'purple':
        return 'text-purple-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-card p-6 ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-900">{title}</h2>
        {badge && (
          <span className={`text-sm font-medium ${getBadgeColor(badge.color)}`}>
            {badge.text}
          </span>
        )}
      </div>
      {children}
    </div>
  );
};

export default Card;