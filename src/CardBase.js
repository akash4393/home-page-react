import React, { Component } from 'react';
import functionalComponents from './functionalComponents.js';
import './css/cardBase.css'

class CardBase extends Component {
	constructor(props) {
		super(props);
		this.props = props;
	};

	render() {
		let cardStyle = this.props.cardStyle;
		console.log(functionalComponents);
		return(
			<div className="card-base-container" style={cardStyle}>
				{functionalComponents.verticalHeading('Test', 'test')}
			</div>
		);
	}
}

export default CardBase;