import React, {useState} from 'react';
import Axios from '@/services/axiosInstance';
import { useNavigate } from "react-router-dom";
import './Login.css';

import LoginImage from '../../assets/images/login-image.jpg'

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (user, type) => {
        localStorage.setItem('loggedIn', "true");
        localStorage.setItem('userId', user._id);
        localStorage.setItem('userData', JSON.stringify(user));
        console.log(user, type);
        if(type === "Not Associated") {
            navigate('/learning-path');
        } else {
            navigate('/');
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await Axios.post('/oauth/login', {
                email: email,
                password: password,
            })
            handleLogin(res.data.user, res.data.type)
        } catch(err) {
            setError(err.response.data.error);
        }
    }

    return (
        <section className="login">
            <aside className="login-content">
                <div className="banner-content" >
                    <img src='/images/Logo.jpg' alt="login" className="logo"/>
                    <div className="line" />
                    <h1>N2O Ciphers Bounty Nation</h1>
                </div>
                <div className="login-headers">
                    <h1 className="userInvite"> Welcome back! </h1>
                    <h3>Log in with your email</h3>
                </div>
                { error && <div className="error">{error}!</div> }
                <form className="login-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder='Email address' onChange={(e) => setEmail(e.target.value)}/>
                    <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                    <a onClick={() => navigate('/user/forgot-password')}>forget password?</a>
                    <button type="submit">Login</button>
                    <div className="signUp">
                    <span> Don't have an account?ㅤ
                        <a onClick={() => navigate('/user/sign-up')}>Sign Up</a>
                    </span>
                    </div>
                </form>
            </aside>
            <img src={LoginImage} alt="Login Image" className="login-image"/>
        </section>
  )
}
