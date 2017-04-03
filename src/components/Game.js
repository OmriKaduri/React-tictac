import React, {Component} from 'react';
import './Game.css';
import Board from './Board';
import { calculateWinner } from './GameUtils.js';
import { connect } from 'react-redux';
import { addHistory, setHistoryCurrent, setSideLength} from '../actions/actions.js';

class Game extends Component{

	constructor(){
		super();
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		let value = parseInt(event.target.value);
		this.props.onSideLengthChange(value);
	}

	handleClick(squareIndex){
		const history=this.props.history.slice(0,this.props.current+1);
	  	const squares=history[this.props.current].squares;
	    if(squares[squareIndex] || calculateWinner(squares)){
	    	return;
	    }
		const squaresSplitted = squares.slice();
		squaresSplitted[squareIndex]=this.props.xIsNext?"X":"O";
	  	this.props.addHistory(squaresSplitted);
	}

	changeState(step){
		let stepNum = parseInt(step);
		this.props.setCurrent(stepNum)
	}

	prepareSteps(history,current){
		var steps = new Array(history.length).fill();
		for (let step in steps){
			steps[step] = 
				<li key={step}>
					<a href="#" onClick={()=>this.changeState(step)}>
						Move #{step}
					</a>
				</li>;
		}
		return steps;
	}

	render(){
		let status;
		let winner = calculateWinner(this.props.history[this.props.current].squares);
	    if(winner==null){
	      status = 'Next player: '+(this.props.xIsNext?"X":"O");
	    }else{
	      status = 'Player '+(winner)+' won!';
	    }
		return(
			<div>
				<div className="sideLengthInput" >
					<input type="number" name="size" min="2" value={this.props.sideLength} max="24" 
						onChange={this.handleChange}/>	
				</div>
		
				<div className='game'>
					<Board squares={this.props.history[this.props.current].squares} onClick={(i)=>this.handleClick(i)}/>
					<div className="gameinfo">
					<div className="status">{status}</div>
					<ol>{this.prepareSteps(this.props.history,this.props.current)}</ol>
				</div>
				</div>
			</div>		
		);
	}
}

const mapStateToProps = (state) => {
	return{
		sideLength : state.sideLength,
		history : state.history,
		xIsNext : state.xIsNext,
		current : state.current,
	}
} 

const mapDispatchToProps = (dispatch) => {
	return{
		addHistory : (squares) => {
			dispatch(addHistory(squares));
		},
		setCurrent : (current) => {
			dispatch(setHistoryCurrent(current));
		},
		onSideLengthChange : (value) => {
			dispatch(setSideLength(value));
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Game);
