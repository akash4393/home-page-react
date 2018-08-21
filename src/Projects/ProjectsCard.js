
/*
@author Akash Singh
@email contact@akashsingh.io
@web akashsingh.io
*/

import React, { Component } from 'react';
import CardBase from '../common/Card/CardBase.js';
import functionalComponents from '../common/functionalComponents/functionalComponents.js';
import SimpleMediaCard from './ProjectCard/ProjectCard.js';
import PROJECTS_CARD_DATA from './ProjectsCardData.js';
import './ProjectsCard.css'

class ProjectsCard extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.children = new Map([]);
		this.style = {};
		this.state = {
			hidden: true
		};

		this.initializeChildren();
	}

	initializeChildren() {
		this.children = new Map([]);

		let toggleArrow = functionalComponents.arrowComponent(this.state.hidden, 'projects-arrow', this.showProjectsCard.bind(this));
		this.children.set('toggleArrow', toggleArrow);

		let horizontalHeading = functionalComponents.horizontalHeading('Projects', 'projects-horizontal');
		this.children.set('horizontalHeading', horizontalHeading);

		let libsignalProtocolExample = SimpleMediaCard({
			'card': 'libsignal-card',
			'media': {
				className: 'libsignal-card-media'
			},
			'data': PROJECTS_CARD_DATA.libsignal_protocol_javascript_example
		});
		this.children.set('libsignalProtocolExample', libsignalProtocolExample);

		let ageOfMythology = SimpleMediaCard({
			'card': 'age-of-mythology-card',
			'media': {
				className: 'age-of-mythology-media'
			},
			'data': PROJECTS_CARD_DATA.age_of_mythology
		});
		this.children.set('ageOfMythology', ageOfMythology);

		let aLeafStory = SimpleMediaCard({
			'card': 'a-leaf-story-card',
			'media': {
				className: 'a-leaf-story-media'
			},
			'data': PROJECTS_CARD_DATA.a_leaf_story
		});
		this.children.set('aLeafStory', aLeafStory);

		let emailSecurity = SimpleMediaCard({
			'card': 'email-security-card',
			'media': 'test',
			'data': PROJECTS_CARD_DATA.email_security
		});
		this.children.set('emailSecurity', emailSecurity);
	}

	showProjectsCard() {
		const currentState = this.state.hidden;
		this.setState({hidden: !currentState});
	}

	render() {
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