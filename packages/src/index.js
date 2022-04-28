import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './routes';
import GlobalStyles from './GlobalStyles';
import ContextStore from './context/ContextStore';
import { ContextConsumer } from './context/Context';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ContextStore>
      <ContextConsumer>
        {() => (
          <BrowserRouter>
            <App />
          </BrowserRouter>
        )}
      </ContextConsumer>
    </ContextStore>
  </React.StrictMode>
);
