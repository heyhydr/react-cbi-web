// NavigationBar.tsx

import React from 'react';

interface NavigationBarProps {
  items: string[];
}

const NavigationBar: React.FC<NavigationBarProps> = ({ items }) => {
  return (
    <nav>
      <div className="logo">
        <img src="src/assets/cbilogo.svg" alt="Logo" />
      </div>
      <div className="menu">
        {items.map((item, index) => (
          <a key={index} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavigationBar;
