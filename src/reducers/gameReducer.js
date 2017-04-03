import * as _ from 'lodash';
import {gameSizeReducer} from './gameSizeReducer.js';
import {addHistoryReducer, setHistoryCurrent} from './historyReducer.js';
export const initialState = {
	sideLength : 3,
	history:[{
		squares: Array(Math.pow(3,2)).fill(null)
	}],
	xIsNext:true,
	current:0,
};

export const gameReducer = (state,action) => {
	switch(action.type){
		case 'SET_SIDE_LENGTH':
			return gameSizeReducer(state,action);
		case 'ADD_HISTORY':
			return addHistoryReducer(state,action); 
		case 'SET_HISTORY_CURRENT':
			return setHistoryCurrent(state,action);
		default:
			return state;
	}
};