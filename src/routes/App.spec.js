import { renderComponent } from '../utils/testUtils';
import { screen } from '@testing-library/react';
import App from '.';

test('renders learn react link', () => {
  renderComponent(<App />);
  const linkElement = screen.getByText(/react app template/i);
  expect(linkElement).toBeInTheDocument();
});
