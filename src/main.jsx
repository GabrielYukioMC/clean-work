import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import './styles/global.css'; // Se você tiver estilos globais

// Se estiver usando Context API ou Redux, adiciona aqui
// import { Provider } from 'react-redux';
// import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>
);
