import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react'
import AuthUser from '../components/AuthUser';
import logo from '../assets/logo.png'




const Login = () => {

    const [email, setEmail] = useState();  //create email state 
    const [password, setPassword] = useState();  //create password state 
    const { http, setToken, getToken } = AuthUser();

    //This is used for when login api have only token
    const [user, setUser] = useState([])  // user data return in login api directly pass
    useEffect(() => {
        http.get('/users/4').then(response => {
            setUser(response.data);
        });
    }, [])

    const handleSubmit = useCallback((event) => {  // onsubmit handel login api here 
        //Api call
        event.preventDefault();

        http.post('/login', { email: email, password: password }).then(response => {
            setToken(user, response.data.token);
        });

    }, [email, password]);

    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col">
                            <div className="form-signin">
                                <form onSubmit={handleSubmit}>
                                    <div className="">
                                        <div className="card-body">
                                            <img className="mb-4" src={logo} alt="" width="180" height="190" />
                                            <h1 className="h3 mb-3 fw-normal">Login</h1>

                                            <div className="form-floating">
                                                <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" placeholder="name@example.com" />
                                                <label htmlFor="email">Email address</label>
                                            </div>
                                            <div className="form-floating">
                                                <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" placeholder="Password" />
                                                <label htmlFor="password">Password</label>
                                            </div>

                                            <div className="checkbox mb-3">
                                                <label>
                                                    <input type="checkbox" value="remember-me" /> Remember me
                                                </label>
                                            </div>
                                            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                                            <p className="mt-5 mb-3 text-muted">&copy; 2023</p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
