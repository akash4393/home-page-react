import React from 'react';
import './functionalComponents.css'

class functionalComponentsClass {

	verticalHeadingRotatedText(headingText, customClass, showHide) {
		let charactersOfHeadingArray = headingText.split('');
		customClass = (customClass) ? customClass : '';
		customClass += showHide ? ' vertical-heading-show' : ' vertical-heading-hide';
		return(
			<div key={headingText + Math.random()} className={`vertical-heading-rotated ${customClass}`}>
				<h1>
					{headingText}
				</h1>
			</div>
		);
	}

	horizontalHeading(headingText, customClass) {
		return(
			<div key={headingText + Math.random()} className={`horizontal-heading ${customClass}`}>
				<h1>{headingText}</h1>
			</div>
		);
	}

	arrowComponent(direction, customClass, onClickCallback) {
		let charCodeArrow;

		// if direction = true, display arrow left; else arrow right
		if(direction) { 
			charCodeArrow = '\u21E6';
		} else {
			charCodeArrow = '\u21E8';
		}

		return (
			<div key={Math.random()} className={`arrow-container ${customClass}`} onClick={onClickCallback}>
				<div className="arrow">
					<span>{charCodeArrow}</span>
				</div>
			</div>
		);
	}
};

let functionalComponents = new functionalComponentsClass();

export default functionalComponents;

