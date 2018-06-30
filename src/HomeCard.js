import React, { Component } from 'react';
import CardBase from './CardBase.js';
import functionalComponents from './functionalComponents.js'

class HomeCard extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.children = [];
		this.style = {};

		this.initializeChildren();
	}

	initializeChildren(){
		this.style = {
			width: '100%',
			height: '100%',
			background: '#fcf0da'
		}
		let horizontalHeading = functionalComponents.horizontalHeading('ABOUT', '');
		let verticalHeading = functionalComponents.verticalHeading('ABOUT', '');
		this.children.push(horizontalHeading);
		this.children.push(verticalHeading);
	}

	render(){
		return(
			<CardBase children={this.children} cardStyle={this.style}></CardBase>
		);
	}
}

export default HomeCard;