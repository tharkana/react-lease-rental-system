import Api from "../api"
import { REQUEST_LEASE_LIST, SUCCESS_LEASE_LIST, FAIL_LEASE_LIST, REQUEST_LEASE_DETAILS, SUCCESS_LEASE_DETAILS, FAIL_LEASE_DETAILS } from "./types";

export const loadLeaseList = () => dispatch => {
    dispatch({ type: REQUEST_LEASE_LIST });
    Api.getCurrentLeaseList()
        .then(response => response.json())
        .then(
            data => dispatch({ type: SUCCESS_LEASE_LIST, data }),
            error => dispatch({ type: FAIL_LEASE_LIST, error: error.message || 'Unexpected Error!!!' })
        )
 };



 export const loadLeaseData = (id) => dispatch => {
    dispatch({ type: REQUEST_LEASE_DETAILS });
    Api.getLeaseDetail(id)
        .then(response => response.json())
        .then((data) => {

            

            return dispatch({ type: SUCCESS_LEASE_DETAILS, data });
        })
        .catch(error => dispatch({ type: FAIL_LEASE_DETAILS, error: error.message || 'Unexpected Error!!!' }))
 };