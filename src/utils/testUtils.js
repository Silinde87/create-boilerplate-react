import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

const renderComponent = (ui) => {
  return render(<Router>{ui}</Router>);
};

export { renderComponent };
