import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Footer from '../../components/Footer'
import PublicRoutes from '../../routes/PublicRoutes';


const Guest = () => {
    return (
        <React.Fragment>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-white bg-white">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/home">&VPRO</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="nav nav-pills navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/home" end>Home</NavLink>
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
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <NavLink className="btn btn-sm btn-pills btn-soft-primary me-md-2" to="/login">Login</NavLink>
                    </div>
                </nav>
            </div>

            <PublicRoutes />
            <Footer />
        </React.Fragment>
    )
}

export default Guest
