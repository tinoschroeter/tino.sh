import { render, screen } from '@testing-library/react';
import App from './App';

test('find text Projects', () => {
  render(<App />);
  const linkElement = screen.getByText('Projects');
  expect(linkElement).toBeInTheDocument();
});
