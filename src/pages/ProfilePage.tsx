import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiShoppingBag, FiHeart, FiSettings, FiLogOut } from 'react-icons/fi';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: <FiUser />, label: 'My Profile', onClick: () => {} },
    { icon: <FiShoppingBag />, label: 'My Orders', onClick: () => {} },
    { icon: <FiHeart />, label: 'Wishlist', onClick: () => {} },
    { icon: <FiSettings />, label: 'Settings', onClick: () => {} },
    { icon: <FiLogOut />, label: 'Logout', onClick: () => {} },
  ];

  return (
    <div className="p-4">
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
          <FiUser className="w-8 h-8 text-gray-500" />
        </div>
        <div>
          <h1 className="text-xl font-semibold">John Doe</h1>
          <p className="text-gray-500">john.doe@example.com</p>
        </div>
      </div>

      <div className="space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={item.onClick}
            className="w-full flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage; 