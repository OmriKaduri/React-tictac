import * as _ from 'lodash';

export const addHistoryReducer = (state, action) => {
	const newState = _.cloneDeep(state);
	++newState.current;
	newState.history = state.history.slice(0,newState.current);
	newState.history.push({squares:action.squares});
	newState.xIsNext = !newState.xIsNext;
	return newState;
};

export const setHistoryCurrent = (state,action) => {
	const newState = _.cloneDeep(state);
	newState.current = action.current;
	newState.xIsNext = (action.current%2==0);
	return newState; 
}