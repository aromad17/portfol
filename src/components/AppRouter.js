import React, { useState } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Work from './Work'
import Skill from './Skill'
import Contact from './Contact'
import Nav from './Nav'
import Footer from './Footer'


const Layout = () => {

    const [checkHome, setCheckHome] = useState(false);

    return (
        <div>

            <Outlet checkHome={checkHome} setCheckHome={setCheckHome} />
            {checkHome ? <></> : <Footer checkHome={checkHome} setCheckHome={setCheckHome} />}
        </div >
    )
}


function AppRouter({ setCheckHome, checkHome }) {



    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home setCheckHome={setCheckHome} checkHome={checkHome} />} />
                <Route path='/about' element={<About setCheckHome={setCheckHome} checkHome={checkHome} />} />
                <Route path='/skill' element={<Skill setCheckHome={setCheckHome} checkHome={checkHome} />} />
                <Route path='/work' element={<Work setCheckHome={setCheckHome} checkHome={checkHome} />} />
                <Route path='/contact' element={<Contact setCheckHome={setCheckHome} checkHome={checkHome} />} />
            </Route>
        </Routes>
    )
}

export default AppRouter