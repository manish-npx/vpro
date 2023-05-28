import React from 'react'
import darkLogo from '../../assets/logo-dark.png'
import lightLogo from '../../assets/logo-light.png'
import { Link, NavLink } from 'react-router-dom'
import AuthUser from '../AuthUser';
import Footer from '../../components/Footer'
import PublicRoutes from '../../routes/PublicRoutes';


const Guest = () => {
    const { token, logout } = AuthUser();
    const logoutUser = () => {
        if (token !== undefined) {
            logout();
        }
    }
    return (
        <>
            <header id="topnav" className="defaultscroll sticky">
                <div className="container">
                    <Link className="logo" to="/">
                        <img src={darkLogo} height="100" className="logo-dark-mode" alt="" />
                        <img src={lightLogo} height="100" className="logo-light-mode" alt="" />
                    </Link>

                    {/* Mobile View */}
                    <div className="menu-extras">
                        <div className="menu-item">
                            {/*  Mobile menu toggle*/}
                            <Link className="navbar-toggle" id="isToggle" onClick={() => toggleMenu()}>
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Link>
                            {/*  End mobile menu toggle */}
                        </div>
                    </div>

                    <ul className="buy-button list-inline mb-0">
                        <li className="list-inline-item ps-1 mb-0">
                            <NavLink className="btn btn-sm btn-pills btn-soft-primary me-md-2" to="/login">Login</NavLink>
                        </li>
                    </ul>

                    <ul className="navigation-menu">

                        <li>
                            <NavLink className="sub-menu-item" aria-current="page" to="/" end>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="sub-menu-item" to="/about-us">About-Us</NavLink>
                        </li>
                        <li>
                            <NavLink className="sub-menu-item" to="/contact-us">Contact-Us</NavLink>
                        </li>
                    </ul>

                </div>
            </header>
            <PublicRoutes />
            <Footer />
        </>
    )
}

export default Guest
