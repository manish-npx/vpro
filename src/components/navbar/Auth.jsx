import React from 'react'
import { NavLink } from 'react-router-dom'
import AuthUser from '../AuthUser';
import Footer from '../../components/Footer'
import PublicRoutes from '../../routes/PublicRoutes';
const Auth = () => {

    const { token, logout } = AuthUser();
    const logoutUser = () => {
        if (token !== undefined) {
            logout();
        }
    }
    return (
        <React.Fragment>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-white bg-white">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">&VPRO</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="nav nav-pills navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/home" end>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/todo">ToDos</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/student">Student</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about-us">About-Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact-us">Contact-Us</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end mr-lg-4 pr-5">
                        <NavLink className="btn btn-sm btn-pills btn-soft-info" to="/profile">Profile</NavLink>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end  pl-4">
                        <button className='btn btn-sm btn-pills btn-soft-danger' onClick={logoutUser}>Logout</button>
                    </div>
                </nav>
            </div>



            <PublicRoutes />
            <Footer />

        </React.Fragment>
    )
}

export default Auth
