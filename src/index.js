import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './routes';
import GlobalStyles from './GlobalStyles';
import ContextStore from './context/ContextStore';
import { ContextConsumer } from './context/Context';

const rootNode = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ContextStore>
      <ContextConsumer>
        {() => (
          <Router>
            <Switch>
              <App />
            </Switch>
          </Router>
        )}
      </ContextConsumer>
    </ContextStore>
  </React.StrictMode>,
  rootNode
);
