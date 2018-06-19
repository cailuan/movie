import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './router';
import { Provider } from 'react-redux'
import { createStore ,applyMiddleware } from 'redux'
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import Reducer from './reducer';

const init = {
    username : '未登录',
}
const store = createStore(Reducer,init,applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><Routes /></Provider>, document.getElementById('root'));
registerServiceWorker();
