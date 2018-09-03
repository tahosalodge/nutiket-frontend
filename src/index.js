/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from 'components/App';
import registerServiceWorker from 'utils/registerServiceWorker';
import createStore from 'state';

const store = createStore();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E31837',
    },
    secondary: {
      main: '#005596',
    },
  },
});

const Root = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept('components/App', () => {
    ReactDOM.render(<Root />, document.getElementById('root'));
  });
}
