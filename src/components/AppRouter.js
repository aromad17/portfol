import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Work from './Work'
import Contact from './Contact'
import Nav from './Nav'
import Footer from './Footer'


const Layout = ({ checkHome, setCheckHome }) => {
    return (
        <div>
            <Nav />
            <Outlet />
            {checkHome ? null : <Footer checkHome={checkHome} setCheckHome={setCheckHome} />}

        </div >
    )
}


function AppRouter({ checkHome, setCheckHome }) {

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path='/' index element={<Home checkHome={checkHome} setCheckHome={setCheckHome} />} />
                <Route path='/about' element={<About checkHome={checkHome} setCheckHome={setCheckHome} />} />
                <Route path='/work' element={<Work checkHome={checkHome} setCheckHome={setCheckHome} />} />
                <Route path='/contact' element={<Contact checkHome={checkHome} setCheckHome={setCheckHome} />} />
            </Route>
        </Routes>
    )
}

export default AppRouter