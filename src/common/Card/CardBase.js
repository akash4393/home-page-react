import React, { Component } from 'react';
import './CardBase.css'

/*
props expects children property of Map type. 
props.children = new Map([componentName, reactComponent]);
*/
class CardBase extends Component {
	constructor(props) {
		super(props);
		this.props = props;
	};

	render() {
		return(
			<div onClick={this.props.onClick} className={`card-base-container ${this.props.customClass}`} style={this.props.cardStyle}>
				{Array.from(this.props.children).map(([key, child]) => (child))}
			</div>
		);
	}
}

export default CardBase;