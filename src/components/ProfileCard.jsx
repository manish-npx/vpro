import React, { useState } from 'react'
import AuthUser from './AuthUser';
import QrCode from './QrCode';
import { Link } from 'react-router-dom';


const ProfileCard = ({ user }) => {

    const [show, setShow] = useState(false);


    const handelQrCode = (event) => {
        setShow(true)
    }

    return (
        <>
            <div className="card-body">
                <div className="row align-items-center">
                    <div className="col-lg-2 col-md-2 text-md-start text-center">
                        <img src={user.data.avatar} className="avatar avatar-large rounded-circle shadow d-block mx-auto" alt="" />
                    </div>
                    <div className="col-lg-9 col-md-9">
                        <div className="row align-items-end">
                            <div className="col-md-7 text-md-start text-center mt-4 mt-sm-0">
                                <h3 className="title mb-0"> {user.data && user.data.first_name + ' ' + user.data.last_name}</h3>
                                <small className="text-muted h6 me-2">{user.data.email}</small>
                                <ul className="list-inline mb-0 mt-3">
                                    <li className="list-inline-item me-2"><Link to="/" className="text-muted" title="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram fea icon-sm me-2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>{user.data.first_name.toLowerCase() + '_' + user.data.last_name.toLowerCase()}</Link></li>
                                    <li className="list-inline-item"><Link to="/" className="text-muted" title="Linkedin"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin fea icon-sm me-2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>{user.data.first_name.toLowerCase() + '_' + user.data.last_name.toLowerCase()}</Link></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-1 col-md-1">
                        <button className="btn btn-sm btn-primary" onClick={() => handelQrCode(show)}>QR</button>
                    </div>
                </div>
                <QrCode qr={show} setShow={setShow} user={user} />
            </div>

        </>
    )
}

export default ProfileCard
