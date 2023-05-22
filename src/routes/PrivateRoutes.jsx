import React, { useState, useEffect } from 'react'
import AuthUser from '../components/AuthUser';
import { Outlet, Navigate, useLocation } from 'react-router-dom'
import Loading from '../components/Loading';

const PrivateRoutes = () => {

    //get token from auth
    const { getToken } = AuthUser();

    return getToken() ? <Outlet /> : <Navigate to="/login" replace />;

}

export default PrivateRoutes