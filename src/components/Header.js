import React from 'react'
import Nav from './Nav'
import './Header.css'
import WSC from '../assets/WSC.jpg'

const Header = () => {
    return (
        <div className='header'>
            <div className='header__logo'>
                <img src={WSC} alt='logo'/>
            </div>

            <div className="header__right">
                <Nav/>
            </div>
        </div>
    )
}

export default Header