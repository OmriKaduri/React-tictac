import * as _ from 'lodash';
import {initialState} from './gameReducer.js';

export const gameSizeReducer = (state, action) => {
	const newState = _.cloneDeep(state);
	newState.sideLength = action.sideLength;
	({xIsNext:newState.xIsNext,current:newState.current} = initialState);
	newState.history = [{
		squares: Array(Math.pow(action.sideLength,2)).fill(null)
	}];
	return newState;
};