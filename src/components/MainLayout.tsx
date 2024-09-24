// src/components/MainLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const MainLayout: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '1rem' }}>
        {/* O Outlet renderiza o conteúdo da rota atual */}
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
