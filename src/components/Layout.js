import React, { useState } from 'react'
import { Outlet } from 'react-router'

import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = () => {
    const [openSidebar, setOpenSidebar] = useState(false)
    const handleSidebarStatus = status => {
        setOpenSidebar(status)
    }
    return (
        <>
            <Navbar handleSidebarStatus={handleSidebarStatus} />
            <Sidebar openSidebar={openSidebar} handleSidebarStatus={handleSidebarStatus} />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
