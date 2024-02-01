// App.tsx
import Message from './Message';
import React from 'react';
import NavigationBar from './NavigationBar';
import './NavigationBar.css'; // Import your CSS file

const App: React.FC = () => {
  const menuItems = ['Home', 'About', 'Services', 'Contact'];

  return (
    <>
    <div>
      <NavigationBar items={menuItems} />
      
    </div>
    <Message/>
    </>
  );
};

export default App;
