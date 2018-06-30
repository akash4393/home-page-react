import React from 'react';

class functionalComponentsClass {
	verticalHeading(headingText, customClass) {
		let charactersOfHeadingArray = headingText.split('');
		customClass = (customClass) ? customClass : '';
		return(
			<div key={headingText + Math.random()} className={`vertical-heading ${customClass}`}>
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
			<div key={headingText + Math.random()} className={`horizontal-heading ${customClass}`}>
				<h1>{headingText}</h1>
			</div>
		);
	}
};

let functionalComponents = new functionalComponentsClass();

export default functionalComponents;

