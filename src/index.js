import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Game from './components/Game';
import './index.css';
import {createStore} from 'redux';
import { initialState, gameReducer } from './reducers/gameReducer';

const store = createStore(gameReducer, initialState); 

ReactDOM.render(
	<Provider store={store}>
  		<Game />
  	</Provider>,
  	document.getElementById('root')
);
