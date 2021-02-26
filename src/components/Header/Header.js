import React from 'react'
import "./Header.css"
import logo from '../Assets/logo.png'

function Header() {
    return (
        <div className = 'header'>
            <div className = 'header__left'>
                <img
                src = {logo}
                alt = 'logo'
                />
                </div>
            <div className = 'header__middle'></div>

            <div className = 'header__right'></div>
            
        </div>
    )
}

export default Header
