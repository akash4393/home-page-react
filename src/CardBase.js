import React, { Component } from 'react';
import verticalHeading from './verticalHeading.js';
import './css/cardBase.css'

class CardBase extends Component {
	constructor(props) {
		super(props);
		this.props = props;
	};

	render() {
		let cardStyle = this.props.cardStyle;
		console.log(verticalHeading);
		return(
			<div className="card-base-container" style={cardStyle}>
				{verticalHeading('Test', 'test')}
			</div>
		);
	}
}

export default CardBase;