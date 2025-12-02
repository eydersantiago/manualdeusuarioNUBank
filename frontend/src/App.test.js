import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza el hero del manual interactivo', () => {
  render(<App />);
  expect(screen.getByText(/manual interactivo · react \+ django/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /iniciar recorrido guiado/i })).toBeInTheDocument();
});

