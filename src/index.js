import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from "./App";
import store from './saga/store/store';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('allBody')
)
;
registerServiceWorker();
