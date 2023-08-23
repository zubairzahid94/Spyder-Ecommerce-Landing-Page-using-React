import React, { useState } from 'react';
import DropdownContent from './DropdownContent';

const HamburgerButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="absolute right-0 inline-flex text-left">
      <button
        onClick={toggleDropdown}
        className=" items-center justify-center p-2 text-gray-600 hover:text-gray-300 focus:outline-none"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
        </svg>
      </button>
      {isDropdownOpen && <DropdownContent />}
    </div>
  );
};

export default HamburgerButton;
