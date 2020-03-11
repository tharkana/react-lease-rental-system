import { combineReducers } from 'redux'
import leaseDetailReducer from './leaseDetail';
import leastListReducer from './leaseList';


const rootReducer = combineReducers({
    leaseDetailReducer,
    leastListReducer
})

export default rootReducer;