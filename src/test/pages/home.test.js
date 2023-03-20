import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import TestRenderer from 'react-test-renderer';
import store from '../../redux/store';
import Home from '../../pages/home/Home';

describe('Home', () => {
  test('Render Home page', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
