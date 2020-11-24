import React from 'react';
import { slide as Sidebar } from 'react-burger-menu';

// ne pas oublier de mettre la ref pour la page admin

export default props => {
  return (
    <Sidebar>
      
      <a className="Dashboard" href="/">
        Dashboard
      </a>

      <a className="Admin" href="/">
        Admin
      </a>

    </Sidebar>
  );
};