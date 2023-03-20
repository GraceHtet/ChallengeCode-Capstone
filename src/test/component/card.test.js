import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from '../../component/Card';

describe('Card', () => {
  test('Should show card name', () => {
    render(<Card name="Test-card" />);

    expect(screen.getByText('Test-card')).toBeInTheDocument();
  });

  test('Should show total number', () => {
    render(<Card name="Test-card" total={4} amount />);

    expect(screen.getByText('Challenges:4')).toBeInTheDocument();
  });
});
