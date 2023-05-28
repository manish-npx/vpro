import React from 'react'
import { NavLink } from 'react-router-dom'
import AuthUser from '../components/AuthUser';
import ProfileCard from '../components/ProfileCard';


const Profile = () => {

    const { user } = AuthUser();

    return (
        <>
            <section className="d-table w-100 bg-white section pb-0">
                <div className="row align-items-center"></div>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-10">
                            <div className="card public-profile border-0 rounded shadow" style={{ zIndex: 1 }}>
                                <ProfileCard user={user} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile

