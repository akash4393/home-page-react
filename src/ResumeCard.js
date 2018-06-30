import React, { Component } from 'react';
import CardBase from './CardBase.js';
import functionalComponents from './functionalComponents.js'
import './css/ResumeCard.css'

class ResumeCard extends Component {
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
		let horizontalHeading = functionalComponents.horizontalHeading('', 'resume-horizontal');
		let verticalHeading = functionalComponents.verticalHeading('', 'resume-vertical');
		this.children.push(horizontalHeading);
		this.children.push(verticalHeading);
	}

	render(){
		return(
			<CardBase customClass="resume-card" children={this.children} cardStyle={this.style}></CardBase>
		);
	}
}

export default ResumeCard;