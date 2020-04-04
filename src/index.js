import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider} from 'styled-components';

import GlobalStyle from './theme/globalStyle';
import Theme from './theme/theme'

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={Theme}> {/*CSS Variables*/}
        <App />
        <GlobalStyle /> {/*CSS Global styles*/}
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
