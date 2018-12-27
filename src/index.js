import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom';

import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {situacao_cnpj} from './reducers/empresa';

import {Provider} from 'react-redux';

import App from './App';

import './index.css';

import * as serviceWorker from './serviceWorker';

const reducers = combineReducers({situacao_cnpj});
const store = createStore(reducers,applyMiddleware(thunkMiddleware));

ReactDOM.render(
                    <Provider store={store}>
                        <BrowserRouter>
                            <App />
                        </BrowserRouter>
                     </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// <Route exact path="/" component={Home}/>
//<Route path="/autor" component={AutorAdmin}/>
//<Route path="/livro" component={LivroAdmin}/>   
serviceWorker.unregister();
