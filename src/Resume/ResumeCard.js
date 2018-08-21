import React, { Component } from 'react';
import CardBase from '../common/Card/CardBase.js';
import functionalComponents from '../common/functionalComponents/functionalComponents.js'
import RESUME_CARD_DATA from './ResumeCardData.js';
import ResumeMediaCard from './ResumeCard/ResumeCard.js';
import '../css/ResumeCard.css'

class ResumeCard extends Component {
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

	initializeChildren(){
		this.children = new Map([]);

		let toggleArrow = functionalComponents.arrowComponent(this.state.hidden, 'projects-arrow', this.showResumeCard.bind(this));
		this.children.set('toggleArrow', toggleArrow);

		let horizontalHeading = functionalComponents.horizontalHeading('Projects', 'projects-horizontal');
		this.children.set('horizontalHeading', horizontalHeading);

		let libsignalProtocolExample = ResumeMediaCard({
			'card': 'libsignal-card',
			'media': {
				className: 'libsignal-card-media'
			},
			'data': RESUME_CARD_DATA.libsignal_protocol_javascript_example
		});
		this.children.set('libsignalProtocolExample', libsignalProtocolExample);

		let ageOfMythology = ResumeMediaCard({
			'card': 'age-of-mythology-card',
			'media': {
				className: 'age-of-mythology-media'
			},
			'data': RESUME_CARD_DATA.age_of_mythology
		});
		this.children.set('ageOfMythology', ageOfMythology);

		let aLeafStory = ResumeMediaCard({
			'card': 'a-leaf-story-card',
			'media': {
				className: 'a-leaf-story-media'
			},
			'data': RESUME_CARD_DATA.a_leaf_story
		});
		this.children.set('aLeafStory', aLeafStory);

		let emailSecurity = ResumeMediaCard({
			'card': 'email-security-card',
			'media': 'test',
			'data': RESUME_CARD_DATA.email_security
		});
		this.children.set('emailSecurity', emailSecurity);
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