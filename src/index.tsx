import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot em vez de ReactDOM
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/redux';
import App from './App';

// Cria uma referência para o root do aplicativo
const container = document.getElementById('root'); // Verifique se esse elemento existe
if (!container) {
  throw new Error("O elemento com ID 'root' não foi encontrado.");
}

const root = createRoot(container); // Cria o root

// Renderiza o aplicativo utilizando a nova API
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);