import React from 'react'
import './Header.css'
import WSC from '../assets/WSC.jpg'

const Header = () => {
    return (
        <div className='header'>
            <div className='header__logo'>
                <img src={WSC} alt='logo'/>
            </div>

            <div className="header__right">
                <p>menu</p>
            </div>
        </div>
    )
}

export default Header