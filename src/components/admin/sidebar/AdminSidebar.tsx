// components/admin/sidebar/AdminSidebar.tsx
import { useState } from 'react';
import { AiOutlineMenu, AiFillHome, AiFillSetting } from 'react-icons/ai';
import { BiAnalyse } from 'react-icons/bi';

const AdminSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  // Menu items can be an array or object if you plan to map through them
  const menuItems = [
    { icon: AiFillHome, text: 'Overview' },
    { icon: BiAnalyse, text: 'Analytics' },
    { icon: AiFillSetting, text: 'Settings' }
  ];

  return (
    <div className={`transition-width duration-300 ${collapsed ? 'w-16' : 'w-64'} h-full bg-gray-800 p-5 text-white flex flex-col`}>
      <AiOutlineMenu className="cursor-pointer mb-10" onClick={toggleSidebar} />
      {/* Mapping through the menu items */}
      {menuItems.map(({ icon: Icon, text }, index) => (
        <div key={index} className="flex items-center gap-x-4 mb-6">
          <Icon size="1.5em" />
          {!collapsed && <span className="text-xl">{text}</span>}
        </div>
      ))}
    </div>
  );
};

export default AdminSidebar;
