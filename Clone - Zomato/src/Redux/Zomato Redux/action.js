import {GET_SEARCH_SUCCESS,GET_SEARCH_FAILURE,GET_SEARCH_REQUEST} from "./actionTypes"
import axios from "axios"

export const getSearchSuccess = (payload) =>({
    type : GET_SEARCH_SUCCESS,
    payload
})

export const getSearchFailure = (payload) => ({
    type: GET_SEARCH_FAILURE,
    payload
})

export const getSearchRequest = (payload) => ({
    type: GET_SEARCH_REQUEST,
    payload
})

export const getSearchResults = (payload) => dispatch => {
    console.log(payload)
    dispatch(getSearchRequest())
    return axios.get(`https://developers.zomato.com/api/v2.1/search?q=${payload}`,{
        headers:{
            "user-key" : "2461a7267fcdfbbddd365f545b7f9451"
        }
    })
    .then(res=>res.data)
    .then(res=>dispatch(getSearchSuccess(res)))
    .catch(err=>dispatch(getSearchFailure(err)))
}