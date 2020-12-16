import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useDispatch,useSelector} from "react-redux"
import {authorizeLogin} from  "../Redux/Login Redux/action"
import {Redirect} from "react-router-dom"



const Login = () => {
    // const [auth,setAuth] = useState(true)
    const [email,setEmail] = useState(" ")    
    const [password,setPassword] = useState("")   
    const dispatch = useDispatch()
 
    
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }));

    const handleLogin = () => {
        dispatch(authorizeLogin({email,password}))
    }

    const isAuth = useSelector((state)=>state.login.isAuth)

    const classes = useStyles();
    if(isAuth){
        return(
            <Redirect to="/home" />
        )
    }
    return(
        <div>
            <form className={classes.root}>
                <TextField value={email} onChange={(e)=>setEmail(e.target.value)} id="standard-basic" label="Email" variant="outlined" />
                <br />
                <TextField value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="standard-basic" label="Password" variant="outlined" />
                <br />
                <Button onClick={handleLogin} variant="outlined" color="secondary">Login</Button>            
            </form>
        </div>
    )
}

export default Login