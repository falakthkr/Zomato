import {LOGIN_SUCCESS,LOGIN_REQUEST,LOGIN_FAILURE} from "./actionTypes"

export const initState = {
    token : "",
    isAuth : false,
    isError : false,
    isLoading : false,
    data : []
}

const loginReducer = (state = initState,{type,payload})=>{
    switch(type){
        case LOGIN_REQUEST:
            return{
                ...state,
                isLoading: true
            };
        case LOGIN_SUCCESS:
            return{
                ...state,
                isLoading:false,
                isAuth:true,
                isError:false,
                data:payload
            };
        case LOGIN_FAILURE:
            return{
                ...state,
                isError: true
            };
        default:
            return state;
    }
}

export default loginReducer