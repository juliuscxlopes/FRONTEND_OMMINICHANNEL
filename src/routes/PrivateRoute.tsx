// src/routes/PrivateRoutes.tsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes: React.FC = () => {
  // Verifica se o token está presente no localStorage
  const token = localStorage.getItem('authToken');

  // Se o token existir, permite o acesso às rotas protegidas
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
