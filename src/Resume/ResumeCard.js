import React, { Component } from 'react';
import CardBase from '../common/Card/CardBase.js';
import functionalComponents from '../common/functionalComponents/functionalComponents.js'
import '../css/ResumeCard.css'

class ResumeCard extends Component {
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
		let horizontalHeading = functionalComponents.horizontalHeading('Resume', 'resume-horizontal');
		let verticalHeading = functionalComponents.verticalHeadingRotatedText('Resume', 'resume-vertical', this.state.hidden);
		this.children.push(horizontalHeading);
		this.children.push(verticalHeading);
	}

	showResumeCard() {
		const currentState = this.state.hidden;
		this.setState({hidden: !currentState});
	}

	render(){
		this.initializeChildren();
		let classes = 'resume-card ' + ((this.state.hidden) ? 'hide' : 'show');
		return(
			<CardBase
				customClass={classes}
				onClick={this.showResumeCard.bind(this)}
				children={this.children} 
				cardStyle={this.style}>
			</CardBase>
		);
	}
}

export default ResumeCard;