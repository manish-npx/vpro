import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'
import Contact from '../pages/Contact'


function publicRoutes() {

    return (
        <React.Fragment>
            <Routes>

                <Route path='/' element={<Home />} exact />
                <Route path='/home' element={<Home />} exact />
                <Route path='/about-us' element={<About />} />
                <Route path='/contact-us' element={<Contact />} />
                <Route path='/login' element={<Login />} />
                <Route path="*" element={<Navigate to="/login" />} />

            </Routes>
        </React.Fragment>
    )
}

export default publicRoutes