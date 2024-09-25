// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import RegisterAttendants from './pages/RegisterAttendants'; // Supondo que você tenha uma página de cadastro
import Home from './pages/Home';
import PrivateRoutes from './routes/PrivateRoute';
import MainLayout from './components/MainLayout'; // Importando o MainLayout

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Rota pública de login */}
        <Route path="/login" element={<Login />} />

        {/* Rota pública de registro/cadastro */}
        <Route path="/register" element={<RegisterAttendants />} />

        {/* Rotas protegidas pelo PrivateRoutes */}
        <Route element={<PrivateRoutes />}>
          <Route element={<MainLayout />}> {/* Adicionando o MainLayout aqui */}
            <Route path="/home" element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
