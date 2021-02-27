import React from 'react'
import './Login.css'
import logo from '../Assets/logo.png'
import log from '../Assets/login_logo2.png'
import { Button } from '@material-ui/core'

function Login() {
    const signIn = () => {

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
