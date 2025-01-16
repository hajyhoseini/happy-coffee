import React from 'react';

const MobileButton = ({ setIsSidebarOpen }) => {
  return (
    <button
      onClick={() => setIsSidebarOpen(true)}
      className="fixed top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-full z-50"
    >
      ☰
    </button>
  );
};

export default MobileButton;
