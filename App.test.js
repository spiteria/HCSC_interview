import { render, screen } from '@testing-library/react';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const header = screen.getByText(/Dolphin/);
  expect(header).toBeInTheDocument();
  const clue1 = 
  expect(clue1).toBeInTheDocument();
  const clue2 = screen.getByText(/I am well known for my playful behavior./);
  expect(clue2).toBeInTheDocument();
  const clue3 = screen.getByText(/I communicate by clicking and whistling./);
});
