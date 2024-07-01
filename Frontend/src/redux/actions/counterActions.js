
export const INCREASE_COUNTER = 'INCREASE_COUNTER';

export const increaseCounter = (ammount) => {
	return {
		type: INCREASE_COUNTER,
		payload: ammount,
	}
}