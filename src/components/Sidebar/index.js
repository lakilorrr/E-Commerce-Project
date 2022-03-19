import React from 'react'
import CartButtons from '../CartButtons'
import { FaTimes } from 'react-icons/fa'
import { links } from '../../utils/constants'
import logo from '../../assets/logo.svg'
import { SidebarContainer } from './style'
import { Link } from 'react-router-dom'

const Sidebar = ({ openSidebar, handleSidebarStatus }) => {
    return (
        <SidebarContainer>
            <aside className={`sidebar ${openSidebar && 'show-sidebar'}`}>
                <div className='sidebar-header'>
                    <img src={logo} alt='comfy sloth' className='logo' />
                    <button className='close-btn' onClick={() => handleSidebarStatus(false)}>
                        <FaTimes />
                    </button>
                </div>
                <ul className='links'>
                    {links.map(link => {
                        const { id, text, url } = link
                        return (
                            <li key={id}>
                                <Link to={url} onClick={() => handleSidebarStatus(false)}>
                                    {text}
                                </Link>
                            </li>
                        )
                    })}
                    <li>
                        <Link to='/checkout' onClick={() => handleSidebarStatus(false)}>
                            checkout
                        </Link>
                    </li>
                </ul>
                <CartButtons handleSidebarStatus={handleSidebarStatus} />
            </aside>
        </SidebarContainer>
    )
}

export default Sidebar
