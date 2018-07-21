import React, { Component } from 'react';
import CardBase from '../common/Card/CardBase.js';
import functionalComponents from '../common/functionalComponents/functionalComponents.js'
import '../css/PhotoCard.css'

class PhotoCard extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.children = [];
		this.style = {};
		this.state = {
			hidden: true
		};

		this.initializeChildren();
	}

	initializeChildren(){
		this.children = [];
		let horizontalHeading = functionalComponents.horizontalHeading('Photography', 'photography-horizontal');
		let verticalHeading = functionalComponents.verticalHeadingRotatedText('Photography', 'photography-vertical', this.state.hidden);
		this.children.push(horizontalHeading);
		this.children.push(verticalHeading);
	}

	showPhotographyCard() {
		const currentState = this.state.hidden;
		this.setState({hidden: !currentState});
	}

	render(){
		this.initializeChildren();
		let classes = 'photo-card ' + ((this.state.hidden) ? 'hide' : 'show');
		return(
			<CardBase 
				customClass={classes}
				onClick={this.showPhotographyCard.bind(this)}
				children={this.children} 
				cardStyle={this.style}>
			</CardBase>
		);
	}
}

export default PhotoCard;