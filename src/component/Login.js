import React, { useState } from 'react';
import './Login.css';
import digi from './digi.jpeg';
import Home from './Home'; // Import the Home component
 import backgroundimg from './backgroundimg.webp'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showForgetPasswordForm, setShowForgetPasswordForm] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        setIsLoggedIn(true); 
    };

    const handleForgetPassword = () => {
        console.log('Forget Password clicked');
        setShowForgetPasswordForm(true);
    };

    const handleRequestResetLink = () => {
        console.log('Request reset link clicked for email:', email);
        
    };

    const handleBackToLogin = () => {
        setShowForgetPasswordForm(false);
    };

    return (
        <div className="login-con">
        {isLoggedIn ? null : <img src={backgroundimg} className='bgimg'/>}
        {isLoggedIn ? (
            <Home /> 
        ) : (
            <>
                <img src={digi} alt="logowogo" className='pogo' />
                <p style={{marginLeft:'2rem', marginBottom:'3rem'}}>Welcome to DigitalFlake Admin</p>
                {!showForgetPasswordForm ? (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Email:</label>
                            <input 
                                type="email" className='firstemail'
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input 
                                type="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                        </div>
                        <div>
                            <p onClick={handleForgetPassword} className='bbt'>Forget Password?</p>
                        </div>
                        <button type="submit">Login</button>
                    </form>
                ) : (
                    <div className="reset-password-form">
                        <p style={{marginLeft:'1.5rem'}}>Did you forget your password?</p>
                        <input 
                            type="email"
                            value={email}  style={{marginLeft:'1.5rem'}}
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        /><p></p>
                        <button onClick={handleRequestResetLink}>Request Reset Link</button>
                        <p onClick={handleBackToLogin} style={{textDecoration:'underline', cursor:'pointer', marginLeft:'5rem'}}>Back to Login</p>
                    </div>
                )}
            </>
        )}
    </div>
    );
};

export default Login;
