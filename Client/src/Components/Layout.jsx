import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import InnerNavBar from './Navbar/InnerNavBar'




const Layout = () => {
    return (
        <>
            <div className='w-screen h-screen'>
               
                <InnerNavBar />
               
                <Outlet />
                <Footer />
            </div>

        </>
    )
}

export default Layout
