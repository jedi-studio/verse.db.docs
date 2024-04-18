import React from 'react';
import '../global.module.css';

function MainLayout({ children }) {
  return (
    <div className="blue-main-bg">
      {children}
    </div>
  );
};

export default MainLayout;
