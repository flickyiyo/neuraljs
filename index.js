import React from 'react';
import { render } from 'react-dom';
import App from './src/App';
import { Provider } from 'mobx-react';
import store from './src/store';

const app = document.getElementById('app');
render(
  <Provider store={store} >
    <App />
  </Provider>,
  app
);
