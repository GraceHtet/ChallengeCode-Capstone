import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import store from '../../redux/store';
import Challenge from '../../pages/challenge/Challenge';

describe('Challenge', () => {
  test('Render challenge page', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Challenge />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
