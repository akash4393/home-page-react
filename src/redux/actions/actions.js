
const actionsInstance = {};

actions.CHANGE_PAGE = 'CHANGE_PAGE';

actions.changePage = function(nextPage) {
	return {
		type: CHANGE_PAGE,
		nextPage
	}
}

export default actionsInstance;