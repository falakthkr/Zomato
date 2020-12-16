import React from "react"
import {Redirect,Route} from "react-router-dom"
import {useSelector} from "react-redux"
import HomePage from "../Components/Home"
import MainPage from "../Components/MainPage"

const PrivateRoutes =()=>{
    return(
        <Route path="/home" exact component={HomePage} />
        // <Route path="/home" exact component={MainPage} />
    )
}

export default PrivateRoutes