import React, { Component } from 'react';
import './Square.css';
class Square extends Component {

	render(props){
		return(
			<button className="Square" onClick={()=>this.props.onClick()}>
				{this.props.value}
			</button>
		);
	}
}

export default Square;
