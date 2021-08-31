import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './theme';
import { Provider } from 'react-redux'
import store from './redux/store'
import { IdProvider } from './contextApi'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <IdProvider>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <App />
      </IdProvider>
    </ThemeProvider>
    </Provider>,
  document.getElementById('root')
);