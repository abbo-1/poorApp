import { createStore } from 'redux';

const initialState = {
    rate: 0,
    person: ""
}

const store = createStore((state = initialState, action) => { 
    switch (action.type) {

        case "UPDATE_RATE": 
            return { ...state, rate : action.rate };
            break;

        case "UPDATE_PERSON":
            return { ...state, person: action.person };
            break;

        default:
                return state;
                break;
    }
});

export default store;
