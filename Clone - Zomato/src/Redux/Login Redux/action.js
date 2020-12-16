import {LOGIN_SUCCESS,LOGIN_REQUEST,LOGIN_FAILURE} from "./actionTypes"
import axios from "axios"

export const loginSuccess = (payload) =>({
    type : LOGIN_SUCCESS,
    payload
})

export const loginFailure = (payload) => ({
    type: LOGIN_FAILURE,
    payload
})

export const loginRequest = (payload) => ({
    type: LOGIN_REQUEST,
    payload
})

export const authorizeLogin = (payload) => dispatch => {
    console.log(payload)
    dispatch(loginRequest())
    return axios.post("https://reqres.in/api/login",{
        "email" : payload.email,
        "password" : payload.password
    })
    .then(res=>console.log(res))
    .then(res=>dispatch(loginSuccess(res)))
    .catch(err=>dispatch(loginFailure(err)))
}