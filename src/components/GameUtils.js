export const getDiagonalWinner = (squareIndex,sideLength,squares) => {
  let playerToWin = squares[squareIndex];
  if(squareIndex==0){
	  for(let j=1;j<sideLength;j++){
	    if(squares[j*(sideLength+1)]!==playerToWin){
	      return null;
	    }
	  }
  }else{
  	for(let j=1;j<sideLength;j++){
	    if(squares[squareIndex*(j+1)]!==playerToWin){
	      return null;
	    }
	  }
  }
  return playerToWin;
};

export const getVerticalWinner = (squareIndex,sideLength,squares) => {
	let playerToWin = squares[squareIndex]; 
	for(let j=1;j<sideLength;j++){
	  if(squares[j*sideLength + squareIndex]!==playerToWin){
	    return null;
	  }
	}
	return playerToWin;
};

export const getHorizontalWinner = (squareIndex,sideLength,squares) => {
	let playerToWin = squares[squareIndex]; 
	for(let j=1;j<sideLength;j++){
	  if(squares[j+squareIndex]!==playerToWin){
	    return null;
	  }
	}
	return playerToWin;
};

export const calculateWinner = (squares) => {
	var sideLength = Math.sqrt(squares.length);
	let winner=null;
	for(let i=0;i<sideLength;i++){ //Iterate 1st row only
		if(squares[i]){
	    	if((i === 0 || i === sideLength-1)) {
				winner = getDiagonalWinner(i,sideLength,squares);
				if(winner){return winner;}
			}
			winner=getVerticalWinner(i,sideLength,squares);
			if(winner){return winner;}
		}
		if(squares[sideLength*i]){
			winner=getHorizontalWinner(sideLength*i,sideLength,squares);
			if(winner){return winner;}
		}
	}
	return winner;
};
