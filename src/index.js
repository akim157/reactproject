import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router-dom';
import { Provider } from 'react-redux'; //провайдер связывает Store со всеми наши элементами
import routes from './routes';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
    <Provider store={ store }>
        <Router history={ history }>
            { routes }
        </Router>
    </Provider>
), document.querySelector('#app'));
