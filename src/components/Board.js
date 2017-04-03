import React, { Component } from 'react';
import './Board.css';
import Square from './Square'; 
class Board extends Component {

  createRow(rowNum,squares){
    let sizeLength = Math.sqrt(squares.length);
    let row = new Array(sizeLength).fill();
    for(let element in row){
      let squareIndex = parseInt(element)+rowNum*sizeLength;
      row[element] = <Square value={squares[squareIndex]} onClick={()=>this.props.onClick(squareIndex)}/>
    }
    
    return (
      <div className="board-row">
        {row}
      </div>
    );
  }

  createBoard(squares){
    var cols = Math.sqrt(squares.length); // cols == rows beqause it is a square
    var table = new Array(cols);
    for (var row = 0; row < cols; row++) {
      table[row] = new Array(cols);
      table[row] = this.createRow(row,squares);
    }
    return (
      table
    );
  }

  render() {
    return (
      <div className="Board">
        {this.createBoard(this.props.squares)}
      </div>
    );
  }
}

export default Board;
