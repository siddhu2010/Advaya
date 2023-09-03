import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="Bagal_ka"style={{ width: '200px', backgroundColor: 'black' }}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ padding: '10px' }}>
          <a href="/">Home</a>
        </li>
        <li style={{ padding: '10px' }}>
          <a href="/about">About</a>
        </li>
        <li style={{ padding: '10px' }}>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

const MainContent = () => {
  return (
    <div>
      {/* Main content */}
    </div>
  );
};

const Sidear = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Sidear;
