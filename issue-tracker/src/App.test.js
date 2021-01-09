import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import state from './store/initial-state.json';
import storeFactory from './store';
import { recoverAuth } from './controllers/user-controller';


test('renders learn react link', () => {
  var store = storeFactory(recoverAuth(state));
  const TestComponent = <Provider store={store}><App /></Provider>
  render(TestComponent);
  const linkElement = screen.getByText(/Logout/i);
  expect(linkElement).toBeInTheDocument();
});
