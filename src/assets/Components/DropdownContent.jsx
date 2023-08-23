import React from 'react';

const DropdownContent = () => {
  return (
    <div className="inline-flex justify-center items-center bg-white border border-cyan-200 bg-cyan-800 border rounded-xl shadow-lg select-none mr-2">
    <a
        href="#home-section"
        className="block p-2 text-indigo-100 transition-colors hover:bg-cyan-100 hover:rounded-lg hover:text-pink-600"
    >
        Home
    </a>
    <a
        href="#work-section"
        className="block p-2 text-indigo-100 transition-colors hover:bg-cyan-100 hover:rounded-lg hover:text-pink-600"
    >
        Work
    </a>
    <a
        href="#service-section"
        className="block p-2 text-indigo-100 transition-colors hover:bg-cyan-100 hover:rounded-lg hover:text-pink-600"
    >
        Services
    </a>
    <a
        href="#contact-section"
        className="block p-2 text-indigo-100 transition-colors hover:bg-cyan-100 hover:rounded-lg hover:text-pink-600"
    >
        Contact
    </a>
</div>

  );
};

export default DropdownContent;
