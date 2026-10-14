import ThemeProvider from '@material-ui/styles/ThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { theme } from './style/theme';

Sentry.init({
  dsn: 'https://cab5aa655b22c59af9d133114cea8cef@o4512254569873408.ingest.de.sentry.io/4512254576361552',
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
