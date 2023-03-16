import { render } from '@testing-library/react';
import Upcomings from '../../pages/upcoming/Upcomings';

describe('Upcoming', () => {
  test('Render upcoming page', () => {
    render(<Upcomings />);
  });
});
