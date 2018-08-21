import React from 'react';
import './functionalComponents.css'
import Typography from '@material-ui/core/Typography';

class FunctionalComponentsClass {

	verticalHeadingRotatedText(headingText, customClass, showHide) {
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
			/*<div key={headingText + Math.random()} className={`horizontal-heading ${customClass}`}>
				<h1>{headingText}</h1>
			</div>*/
			<Typography variant="display2" gutterBottom key={headingText + Math.random()} className={`horizontal-heading ${customClass}`}>
		    	{headingText}
		    </Typography>
		);
	}

	/*
	@params: 
	direction = true, display arrow left; else arrow right
	customClass = element identified for animations post rendering (avoid re-render) !DON'T STYLE!
	onClickCallback = onClick method for parent card component
	*/
	arrowComponent(direction, customClass, onClickCallback) {
		let charCodeArrow;

		if(direction) { 
			charCodeArrow = '\u21E6';
		} else {
			charCodeArrow = '\u21E8';
		}

		return (
			<div key={Math.random()} className={`arrow-container ${customClass}`} onClick={() => {
				if(direction){
					document.querySelector(`.arrow.${customClass}`).style.transform = "rotate(180deg)";
				} else {
					document.querySelector(`.arrow.${customClass}`).style.transform = "rotate(0deg)";
				}
				direction = !direction;
				onClickCallback();
			}}>
				<div className={`arrow ${customClass}`}>
					<span>{charCodeArrow}</span>
				</div>
			</div>
		);
	}
};

let functionalComponents = new FunctionalComponentsClass();

export default functionalComponents;

