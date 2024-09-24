// src/pages/Login.tsx
import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_DB_API_LOGIN}/attendants/login`, {
        email,
        password,
      });

      const { token } = response.data;

      // Armazena o token no localStorage
      localStorage.setItem('authToken', token);

      // Redireciona para a página principal (ex: home ou dashboard)
      navigate('/home');
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '1rem' }}>
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
