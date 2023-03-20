import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Img from '../../component/Img';

describe('Images', () => {
  test('Should have correct src value', () => {
    render(<Img siteName="codeforces" width="80px" height="80px" />);

    expect(screen.getByRole('img')).toHaveAttribute('src', 'code-forces.svg');
  });

  test('Should have input width', () => {
    render(<Img siteName="codeforces" width="80px" height="80px" />);

    expect(screen.getByRole('img')).toHaveAttribute('width', '80px');
  });

  test('Should have default img if the src is incorrect', () => {
    render(<Img siteName="something" width="80px" height="80px" />);

    expect(screen.getByRole('img')).toHaveAttribute('src', 'logoS.png');
  });
});
