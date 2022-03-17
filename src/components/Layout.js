import React from 'react'
import { Outlet } from 'react-router'

import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
