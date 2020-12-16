import {GET_SEARCH_SUCCESS,GET_SEARCH_FAILURE,GET_SEARCH_REQUEST} from "./actionTypes"

export const initState = {
    data : [],
    isLoading : false,
    isError : false
}

const zomatoReducer = (state = initState,{type,payload})=>{
    switch(type){
        case GET_SEARCH_REQUEST:
            return{
                ...state,
                isLoading : true
            };
        case GET_SEARCH_SUCCESS:
            console.log(payload)
            return{
                ...state,
                data:payload.restaurants,
                isError: false,
                isLoading : false
            };
        case GET_SEARCH_FAILURE:
            return{
                ...state,
                isError: true
            };
        default:
            return state;
    }
}

export default zomatoReducer