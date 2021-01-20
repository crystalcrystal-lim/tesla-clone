import React from 'react'
import './Nav.scss'

import { IconButton, Menu } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const Nav = () => {
    return (
        <div>
        <input id="burger" type="checkbox" />

        <label for="burger">
            <span></span>
            <span></span>
            <span></span>
        </label>

        <nav>    
        <ul>
            <li><a href="/">Flim</a></li>
            <li><a href="/">Photography</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">About</a></li>
        </ul>  
        </nav>
        </div>
    )
}

export default Nav