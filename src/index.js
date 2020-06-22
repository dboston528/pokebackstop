import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
ReactDOM.render(
  <Provider store={store}>
    <Navbar />
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
