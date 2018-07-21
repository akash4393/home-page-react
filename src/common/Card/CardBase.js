import React, { Component } from 'react';
import './CardBase.css'

class CardBase extends Component {
	constructor(props) {
		super(props);
		this.props = props;
	};

	render() {
		return(
			<div onClick={this.props.onClick} className={`card-base-container ${this.props.customClass}`} style={this.props.cardStyle}>
				{this.props.children.map(child => (child))}
			</div>
		);
	}
}

export default CardBase;