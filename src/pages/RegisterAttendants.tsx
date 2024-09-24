// src/pages/RegisterAttendants.tsx
import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterAttendants: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Criar o objeto a ser enviado
    const requestData = {
      name,
      email,
      password,
    };

    // Adicionar um console.log para verificar os dados
    console.log('Enviando dados para o backend:', requestData);

    try {
      const response = await axios.post(`${process.env.REACT_APP_DB_API_REGISTER}/attendants/register`, requestData);

      alert('Attendant cadastrado com sucesso!');
      console.log('Attendant registered:', response.data);

      // Redirecionar para a página de login após o cadastro
      navigate('/');
    } catch (error: any) {
      console.error('Error registering attendant:', error);
      if (error.response) {
        console.error('Error Response Data:', error.response.data);
      }
      alert('Erro ao cadastrar. Tente novamente.');
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" gutterBottom>
        Register Attendant
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </form>
    </Container>
  );
};

export default RegisterAttendants;
