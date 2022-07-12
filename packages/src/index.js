import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './routes';
import GlobalStyles from './GlobalStyles';
import { ReactContextProvider } from './context/ContextProvider';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ReactContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReactContextProvider>
  </React.StrictMode>
);
