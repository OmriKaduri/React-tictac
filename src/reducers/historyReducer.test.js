import { addHistoryReducer, setHistoryCurrent} from './historyReducer';
import { initialState } from './gameReducer.js';
import * as _ from 'lodash';

it('Should add squares and update xIsNext and counter', () => {
	const squaresToAdd = _.cloneDeep(initialState.history[0].squares);
	squaresToAdd[0]='X';
	const nextState = addHistoryReducer(initialState,{type:'ADD_HISTORY_REDUCER',squares:squaresToAdd});
	expect(nextState.history[1].squares[0]).toEqual('X');
	expect(nextState.xIsNext).toEqual(false);
	expect(nextState.current).toEqual(1);
})

it('Should set state current to 1', () => {
	const state = _.cloneDeep(initialState);
	const nextState = setHistoryCurrent(initialState,{type:'SET_HISTORY_CURRENT',current:1});
	expect(nextState.current).toEqual(1);
	expect(nextState.xIsNext).toEqual(false);
});