import React from 'react';

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Welcome back, {username}!</h1>
        <p className="text-gray-600 mt-2">What do you want to do today?</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-gray-100 rounded-full px-5 py-2 flex items-center w-64">
          <img src="/images/img_magnifyingglass_1.svg" alt="Search" className="w-4 h-4 mr-2" />
          <input 
            type="text" 
            placeholder="Search for something" 
            className="bg-transparent text-sm text-gray-500 outline-none w-full"
          />
        </div>
        <button className="w-10 h-10 flex items-center justify-center">
          <img src="/images/img_group_417.svg" alt="Notifications" className="w-10 h-10" />
        </button>
        <button className="w-10 h-10 flex items-center justify-center">
          <img src="/images/img_group_418.svg" alt="Messages" className="w-10 h-10" />
        </button>
        <div className="w-11 h-11 rounded-full overflow-hidden">
          <img src="/images/img_pexelschristinamorillo1181690_1.png" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Header;