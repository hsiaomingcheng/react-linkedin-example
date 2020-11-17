import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import App from './page/App';
import './i18n';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '@reducers/rootReducer.js';

/* eslint-disable no-underscore-dangle */
const store = createStore(
    rootReducer /* preloadedState, */,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

ReactDOM.render(
    // <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>,
    // </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
