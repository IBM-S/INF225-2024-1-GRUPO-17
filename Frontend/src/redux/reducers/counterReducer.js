import { INCREASE_COUNTER } from '../actions/counterActions.js';

const initialState = {
	count: 1,
};

const counterReducer = (state = initialState, action) => {
	switch(action.type) {

		case INCREASE_COUNTER:
			return {
				...state,
				count: state.count + action.payload,
			};
		default:
			return state;
	}
}

export default counterReducer;