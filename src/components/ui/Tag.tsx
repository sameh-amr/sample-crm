import React from 'react';

interface TagProps {
  text: string;
  color?: 'red' | 'green' | 'blue' | 'yellow' | 'purple' | 'gray';
}

const Tag: React.FC<TagProps> = ({
  text,
  color = 'gray',
}) => {
  const colorClasses = {
    red: 'bg-red-100 text-red-600',
    green: 'bg-green-100 text-green-600',
    blue: 'bg-blue-100 text-blue-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    purple: 'bg-purple-100 text-purple-600',
    gray: 'bg-gray-100 text-gray-600',
  };
  
  return (
    <span className={`
      inline-block text-sm font-medium rounded-md py-1 px-2
      ${colorClasses[color]}
    `}>
      {text}
    </span>
  );
};

export default Tag;