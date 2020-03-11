import { REQUEST_LEASE_DETAILS, SUCCESS_LEASE_DETAILS, FAIL_LEASE_DETAILS } from "../actions/types";

const initialState = {
    data: [],
    loading: false,
    error: ''
};

export default function leaseDetailReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_LEASE_DETAILS: {
            return {
                ...state,
                loading: true,
                error: ''
            };
        }
        case SUCCESS_LEASE_DETAILS: {
            return {
                ...state,
                data: action.data,
                loading: false
            }
        }
        case FAIL_LEASE_DETAILS: {
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