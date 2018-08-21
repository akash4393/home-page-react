
/*
@author Akash Singh
@email contact@akashsingh.io
@web akashsingh.io
*/

const PROJECTS_CARD_DATA = {
	libsignal_protocol_javascript_example: {
		title: 'Signal Protocol JavaScript Example',
		long_description: 'Open source libsignal-protocol-javascript example application with node server and in-memory storage. Developed for building a better understanding of the library and signal protocol itself.',
		keywords: [
			'javascript',
			'libsignal-protocol-javascript',
			'example',
			'client-server'
		],
		logos: [
			'fab fa-js-square', // Javascript
			'fab fa-node', // Node.js
			'fas fa-lock' // Security
		],
		github_url: 'https://github.com/akash4393/libsignal-javascript-example',
		hosted_url: 'http://ec2-54-219-170-163.us-west-1.compute.amazonaws.com:3000'
	},

	email_security: {
		title: 'Email Security',
		long_description: 'Java based email client for complete end to end encryption. Uses PBKDF for securely exchanging RSA public keys via email service provider network, while being secure against both active and passive adversaries.',
		keywords: [
			'java',
			'bouncy-castle',
			'security',
			'email'
		],
		logos: [
			'fab fa-java', // Java
			'far fa-envelope', // Email
			'fas fa-lock' // Security
		],
		github_url: 'https://github.com/EmailSecurity/JavaClient'
	},

	a_leaf_story: {
		title: 'A Leaf Story',
		long_description: 'Game for Android based mobile devices, which is available on play store under the name A Leaf Story. Written completely in JavaScript using Phaser and ported to android using Cordova libraries.',
		keywords: [
			'phaser',
			'javascript',
			'android',
			'game'
		],
		logos: [
			'fab fa-js-square', // Javascript
			'fab fa-android', // Android
			'fas fa-gamepad' // Game
		],
		image_url: '../assets/a_leaf_story.png',
		github_url: 'https://github.com/weedevelopers/ALeafStory',
		hosted_url: 'https://weedevelopers.github.io/ALeafStory/'
	},

	age_of_mythology: {
		title: 'Age of Mythology - Board Game',
		long_description: 'Cross-platform browser based game using Phaser (JavaScript Game Engine). Runs entirely on the client-side while communicating with a server using Groovy on Grails for save and load.',
		keywords: [
			'groovy-on-grails',
			'javascript',
			'phaser',
			'board-game',
			'game'
		],
		logos: [
			'fab fa-js-square', // Javascript
			'fab fa-html5', // HTML5
			'fas fa-gamepad' // Game
		],
		image_url: '../assets/age_of_mythology.png',
		github_url: 'https://github.com/akash4393/SoftwareEngineeringProject'
	}
};

export default PROJECTS_CARD_DATA;