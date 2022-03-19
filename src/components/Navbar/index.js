import React from 'react'
import { FaBars } from 'react-icons/fa'
import CartButtons from '../CartButtons'
import { links } from '../../utils/constants'
import logo from '../../assets/logo.svg'

import { NavContainer } from './style'
import { Link } from 'react-router-dom'

const Nav = ({ handleSidebarStatus }) => {
    return (
        <NavContainer>
            <div className='nav-center'>
                <div className='nav-header'>
                    <Link to='/'>
                        <img src={logo} alt='comfy sloth' />
                    </Link>
                    <button className='nav-toggle' onClick={() => handleSidebarStatus(true)}>
                        <FaBars />
                    </button>
                </div>
                <ul className='nav-links'>
                    {links.map(link => {
                        const { id, text, url } = link
                        return (
                            <li key={id}>
                                <Link to={url}>{text}</Link>
                            </li>
                        )
                    })}
                </ul>
                <CartButtons handleSidebarStatus={handleSidebarStatus} />
            </div>
        </NavContainer>
    )
}

export default Nav
