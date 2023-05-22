import React from 'react'
import { NavLink } from 'react-router-dom'
import AuthUser from '../components/AuthUser';


const Profile = () => {

    const { user } = AuthUser();

    console.log('user', user.data);


    return (
        <>
            <div className='container'>

                <div className="card shadow rounded border-0 overflow-hidden">
                    <div className="row g-0">
                        <div className="col-md-5">
                            <img src="https://shreethemes.in/landrick/landing/assets/images/blog/01.jpg" className="img-fluid" alt="..." />
                        </div>
                        <div className="col-md-7">
                            <div className="row">
                                <div className="card-body">
                                    <h5 className="card-title">Saas & Software : Landrick</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <NavLink className="btn btn-xs btn-primary me-md-2" to="/">view</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
