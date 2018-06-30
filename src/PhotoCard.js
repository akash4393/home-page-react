import React, { Component } from 'react';
import CardBase from './CardBase.js';
import functionalComponents from './functionalComponents.js'
import './css/PhotoCard.css'

class PhotoCard extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.children = [];
		this.style = {};

		this.initializeChildren();
	}

	initializeChildren(){
		this.style = {
		}
		let horizontalHeading = functionalComponents.horizontalHeading('', 'photography-horizontal');
		let verticalHeading = functionalComponents.verticalHeading('', 'photography-vertical');
		this.children.push(horizontalHeading);
		this.children.push(verticalHeading);
	}

	render(){
		return(
			<CardBase customClass="photo-card" children={this.children} cardStyle={this.style}></CardBase>
		);
	}
}

export default PhotoCard;