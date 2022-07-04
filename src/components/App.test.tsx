import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders sword art gamers header', () => {
  render(<App />);
  const linkElement = screen.getByText(/sword art gamers/i);
  expect(linkElement).toBeInTheDocument();
});