import { initialState, gameReducer } from './gameReducer';

it('Should set side length propery to 4', () => {
	const state = {
		sideLength :3
	};
	const nextState = gameReducer(state,{type:'SET_SIDE_LENGTH',sideLength:4});
	expect(nextState.sideLength).toEqual(4);
})