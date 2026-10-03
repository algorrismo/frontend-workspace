import { render, screen } from '@testing-library/react';
import App from './App';

test('renders week-01 heading', () => {
  render(<App />);
  const heading = screen.getByText(/this is week-01/i);
  expect(heading).toBeInTheDocument();
});
