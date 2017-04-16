import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';

const store = createStore(reducer)

ReactDOM.render(
	<Provider store={this.store} >
	<App />
	</Provider>,
	 document.getElementById('root'));
