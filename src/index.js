/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import registerServiceWorker from 'utils/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept('components/App', () => {
    ReactDOM.render(<App />, document.getElementById('root'));
  });
}
