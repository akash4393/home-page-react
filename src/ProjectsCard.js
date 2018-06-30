import React, { Component } from 'react';
import CardBase from './CardBase.js';
import functionalComponents from './functionalComponents.js'
import './css/ProjectsCard.css'

class ProjectsCard extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.children = [];
		this.style = {};

		this.initializeChildren();
	}

	initializeChildren(){
		this.style = {
		};
		let horizontalHeading = functionalComponents.horizontalHeading('', 'projects-horizontal');
		let verticalHeading = functionalComponents.verticalHeading('', 'projects-vertical');
		this.children.push(horizontalHeading);
		this.children.push(verticalHeading);
	}

	render(){
		return(
			<CardBase customClass="projects-card" children={this.children} cardStyle={this.style}></CardBase>
		);
	}
}

export default ProjectsCard;