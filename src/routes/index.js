import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../globals/constants';
import Home from './home';

function App() {
  return (
    <Routes>
      <Route exact path={ROUTES.HOME} element={<Home />} />
    </Routes>
  );
}

export default App;
