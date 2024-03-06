import { render, screen } from '@testing-library/react';
import SearchBoxApp from './SearchBoxApp';

test('renders learn react link', () => {
  render(<SearchBoxApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
