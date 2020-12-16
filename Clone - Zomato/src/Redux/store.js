import {createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"
import loginReducer from "./Login Redux/reducer"
import zomatoReducer from "./Zomato Redux/reducer"
const rootReducer = combineReducers({
    login:loginReducer,
    zomato:zomatoReducer
})
const store = createStore(rootReducer,applyMiddleware(thunk))
export {store,rootReducer}