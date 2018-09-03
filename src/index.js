/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from 'components/App';
import registerServiceWorker from 'utils/registerServiceWorker';
import createStore from 'state';

const store = createStore();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept('components/App', () => {
    ReactDOM.render(<Root />, document.getElementById('root'));
  });
}
