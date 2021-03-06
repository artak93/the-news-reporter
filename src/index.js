import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App'
import ScrollToTop from './App/ScrollToTop'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/rootReducer'
import * as serviceWorker from './serviceWorker'

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <ScrollToTop>
                <App />
            </ScrollToTop>
        </HashRouter>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
