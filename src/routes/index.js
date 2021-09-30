import { Route } from 'react-router-dom';
import { ROUTES } from '../globals/constants';
import Home from './home';

function App() {
  return (
    <>
      <Route component={Home} exact path={ROUTES.HOME} />
    </>
  );
}

export default App;
