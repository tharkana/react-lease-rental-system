import { REQUEST_LEASE_LIST, SUCCESS_LEASE_LIST, FAIL_LEASE_LIST } from "../actions/types";
const initialState = {
    data: [],
    loading: false,
    error: ''
};
export default function leastListReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_LEASE_LIST: {
            return {
                ...state,
                loading: true,
                error: ''
            };
        }
        case SUCCESS_LEASE_LIST: {
            return {
                ...state,
                data: action.data,
                loading: false
            }
        }
        case FAIL_LEASE_LIST: {
            return {
                ...state,
                loading: false,
                error: action.error
            };
        }
        default: {
            return state;
        }
    }
}

