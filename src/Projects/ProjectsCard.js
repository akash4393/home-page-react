import React, { Component } from 'react';
import CardBase from '../common/Card/CardBase.js';
import functionalComponents from '../common/functionalComponents/functionalComponents.js';
import SimpleMediaCard from './ProjectCard/ProjectCard.js';
import './ProjectsCard.css'

class ProjectsCard extends Component {
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

	initializeChildren() {
		this.children = [];

		let toggleArrow = functionalComponents.arrowComponent(this.state.hidden, 'projects-arrow', this.showProjectsCard.bind(this));
		this.children.push(toggleArrow)

		let horizontalHeading = functionalComponents.horizontalHeading('Projects', 'projects-horizontal');
		this.children.push(horizontalHeading);

		let simpleCard1 = SimpleMediaCard({
			'card': 'project-card-test-1',
			'media': 'test'
		});
		this.children.push(simpleCard1);

		let simpleCard2 = SimpleMediaCard({
			'card': 'project-card-test-2',
			'media': 'test'
		});
		this.children.push(simpleCard2);

		let simpleCard3 = SimpleMediaCard({
			'card': 'project-card-test-3',
			'media': 'test'
		});
		this.children.push(simpleCard3);

		let simpleCard4 = SimpleMediaCard({
			'card': 'project-card-test-4',
			'media': 'test'
		});
		this.children.push(simpleCard4);
	}

	showProjectsCard() {
		const currentState = this.state.hidden;
		this.setState({hidden: !currentState});
	}

	render() {
		this.initializeChildren();
		let classes = 'projects-card ' + ((this.state.hidden) ? 'hide' : 'show');
		return(
			<CardBase 
				customClass={classes}
				children={this.children} 
				cardStyle={this.style}>
			</CardBase>
		);
	}
}

export default ProjectsCard;