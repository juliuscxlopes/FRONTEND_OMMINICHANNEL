import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItemButton, ListItemText } from '@mui/material';

const Sidebar: React.FC = () => { 
  return (
    <div style={{ width: '250px', height: '100vh', background: '#f4f4f4', padding: '1rem' }}>
      <List>
        <ListItemButton component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton component={Link} to="/about">
          <ListItemText primary="About" />
        </ListItemButton>
        <ListItemButton component={Link} to="/contact">
          <ListItemText primary="Contact" />
        </ListItemButton>
      </List>
    </div>
  );
};

export default Sidebar;
