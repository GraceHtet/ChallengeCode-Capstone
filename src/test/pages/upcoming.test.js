import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import TestRenderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import store from '../../redux/store';
import Upcomings from '../../pages/upcoming/Upcomings';

describe('Upcoming', () => {
  test('Render upcoming page', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Upcomings />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Render page title', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Upcomings />
        </BrowserRouter>
      </Provider>,
    );
    const title = screen.findByText(/Upcoming Challenges/i);
    expect(title).toMatchSnapshot();
  });
});
