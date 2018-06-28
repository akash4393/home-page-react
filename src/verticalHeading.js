import React, { Component } from 'react';

export default function verticalHeading(headingText, customClass) {
	let charactersOfHeadingArray = headingText.split('');
	customClass = (customClass) ? customClass : '';
	return(
		<div className={"vertical-heading " + customClass}>
			<h1>
				{charactersOfHeadingArray.map((char, index) => {
					return(<div key={index}>{char}</div>);
				})}
			</h1>
		</div>
	);
};

//export default function horizontalHeading