import React, { Component } from 'react';

class functionalComponents {
	verticalHeading(headingText, customClass) {
		let charactersOfHeadingArray = headingText.split('');
		customClass = (customClass) ? customClass : '';
		return(
			<div className={`vertical-heading ${customClass}`}>
				<h1>
					{charactersOfHeadingArray.map((char, index) => {
						return(<div key={index}>{char}</div>);
					})}
				</h1>
			</div>
		);
	};

	horizontalHeading(headingText, customClass) {
		return(
			<div className={`horizontal-heading ${customClass}`}>
				<h1>{headingText}</h1>
			</div>
		);
	}
};

export default new functionalComponents();

