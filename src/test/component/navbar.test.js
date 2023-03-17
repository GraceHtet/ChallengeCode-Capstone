import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../../component/Navbar';

describe('Navbar', () => {
  test('Should show the input title', () => {
    render(
      <BrowserRouter>
        <Navbar title="Test-title" />
      </BrowserRouter>,
    );

    expect(screen.getByText('Test-title')).toBeInTheDocument();
  });

  test('Should show back button', () => {
    render(
      <BrowserRouter>
        <Navbar title="Test-title" back />
      </BrowserRouter>,
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
