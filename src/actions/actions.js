export const setSideLength = (sideLength) => ({
	type: 'SET_SIDE_LENGTH',
	sideLength
});

export const addHistory = (squares) => ({
	type:'ADD_HISTORY',
	squares
});

export const setHistoryCurrent = (current) => ({
	type:'SET_HISTORY_CURRENT',
	current
});