import React, { Component } from 'react';
import CardBase from '../common/Card/CardBase.js';
import functionalComponents from '../common/functionalComponents/functionalComponents.js'

class HomeCard extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.children = new Map([]);
		this.style = {};

		this.initializeChildren();
	}

	initializeChildren(){
		this.style = {
			width: '100%',
			height: '100%',
			background: '#dddddd'
		}
		let horizontalHeading = functionalComponents.horizontalHeading('Akash Singh', '');
		let verticalHeading = functionalComponents.verticalHeadingRotatedText('', '');
		this.children.set('horizontalHeading', horizontalHeading);
		this.children.set('verticalHeading', verticalHeading);
	}

	render(){
		return(
			<CardBase children={this.children} cardStyle={this.style}></CardBase>
		);
	}
}

export default HomeCard;