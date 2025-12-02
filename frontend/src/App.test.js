import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza el hero y la navegación principal', () => {
  render(<App />);
  expect(screen.getByText(/manual interactivo · react \+ django/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /iniciar recorrido guiado/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /módulos/i })).toBeInTheDocument();
});
