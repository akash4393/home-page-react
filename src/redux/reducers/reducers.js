
const PAGES = {
	HOME: 'HOME',
	PROJECT: 'PROJECT',
	RESUME: 'RESUME',
	PHOTOGRAPHY: 'PHOTOGRAPHY'
};

const STATES = {
	LEFT: 'LEFT', // Page collapsed to the left
	CENTER: 'CENTER', // Page currently visible in the center
	RIGHT: 'RIGHT' // Page collapsed to the right
};

const DEFAULT_STATE = {
	pageSelected: PAGES.HOME,
	pageStates: {
		HOME: STATES.CENTER,
		PROJECT: STATES.RIGHT,
		RESUME: STATES.RIGHT,
		PHOTOGRAPHY: STATES.RIGHT
	}
}

function pages(state = defaultState, action) {
	switch action  {
		case PAGE_CHANGE:
			let pageStates = getPageStates(action.nextPage);
			let pageSelected = Object.assign({}, action.nextPage);
			return Object.assign({}, state, { pageSelected, pageStates });
		default:
			return state
	}
}

function getPageStates(pageName) {
	switch(pageName) {
		case PAGES.HOME:
			return Object.assign({}, DEFAULT_STATE.pageStates);
		case PAGE.PROJECT:
			return {
				HOME: STATES.LEFT,
				PROJECT: STATES.CENTER,
				RESUME: STATES.RIGHT,
				PHOTOGRAPHY: STATES.RIGHT
			}
		case PAGE.RESUME:
			return {
				HOME: STATES.LEFT,
				PROJECT: STATES.LEFT,
				RESUME: STATES.CENTER,
				PHOTOGRAPHY: STATES.RIGHT
			}
		case PAGE.PHOTOGRAPHY:
			return {
				HOME: STATES.LEFT,
				PROJECT: STATES.LEFT,
				RESUME: STATES.LEFT,
				PHOTOGRAPHY: STATES.CENTER
			}
		default:
			return Object.assign({}, DEFAULT_STATE.pageStates);
	}
}

export default pages;