import React, { Component } from 'react';
import './css/cardBase.css'

class CardBase extends Component {
	constructor(props) {
		super(props);
		this.props = props;
	};

	render() {
		let cardStyle = {
			width: this.props.cardStyle.width ? this.props.cardStyle.width : '0px',
			height: this.props.cardStyle.height ? this.props.cardStyle.height : '0px',
			top: this.props.cardStyle.top ? this.props.cardStyle.top : '0px',
			right: this.props.cardStyle.right ? this.props.cardStyle.right : '0px',
			bottom: this.props.cardStyle.bottom ? this.props.cardStyle.bottom : '0px',
			left: this.props.cardStyle.left ? this.props.cardStyle.left : '0px',
			background: this.props.cardStyle.background ? this.props.cardStyle.background : '#ffffff'
		};
		console.log(cardStyle);
		return(
			<div className="card-base-container" style={cardStyle}>

			</div>
		);
	}
}

export default CardBase;