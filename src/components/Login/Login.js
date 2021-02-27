import React from 'react'
import './Login.css'
import logo from '../Assets/logo.png'
import log from '../Assets/login_logo2.png'
import { Button } from '@material-ui/core'
import { auth, provider } from '../../firebase'

function Login() {
    const signIn = () => {
auth.signInWithPopup(provider)
.then(result => {
    console.log(result.user) 
})
.catch((error) => alert(error.message))
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img src={logo} alt="logo" />

                <img src={log} alt="login logo" />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
