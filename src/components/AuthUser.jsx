import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function AuthUser() {


    //This is used for get token from session storage
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        if (tokenString !== 'undefined') {
            const userToken = JSON.parse(tokenString);
            return userToken;
        }
    }
    //This is used for get user data from session
    const getUser = () => {
        const userString = sessionStorage.getItem('user');
        if (userString !== 'undefined') {
            const userDetails = JSON.parse(userString);
            return userDetails;
        }
    }

    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());
    const navigate = useNavigate();  //navigator from react-router-dom

    //This function is used for where we have save token and user data
    const saveToken = (user, token) => {
        sessionStorage.setItem('token', JSON.stringify(token));
        sessionStorage.setItem('user', JSON.stringify(user));

        setToken(token);
        setUser(user);
        navigate("/profile");
    }

    const logout = () => {
        sessionStorage.clear();
        navigate('/login');
    }

    const http = axios.create({
        baseURL: 'https://reqres.in/api/',
        headers: {
            "Content-Type": "application/json"
        }
    });

    return {
        setToken: saveToken,
        token,
        getToken,
        user,
        http,
        logout

    }
}
