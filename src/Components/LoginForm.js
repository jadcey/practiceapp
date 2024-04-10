import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillFacebook,AiFillGoogleCircle,AiFillLinkedin } from 'react-icons/ai'
import '../Css/LoginForm.css';

const LoginForm = () => {
    const navigate = useNavigate();
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);
    const signUpButtonHandler =()=>{
        setIsRightPanelActive(false);
    }
    const signInButtonHandler = ()=>{
        setIsRightPanelActive(true);
    }
    const handleSignIn = () => {
        navigate('/login');
    };

    return (
        <div className="loginform-body" id="main">
            <div className="loginform-container">
                <div className={`loginform-signin ${isRightPanelActive ? 'right-panel-active' : ''}`}>
                    <div className="loginform-form" action="#">
                        <div className="loginform-h1">Create Account</div>
                        <div className="loginform-social-container">
                            <AiFillFacebook href="https://www.facebook.com/"className ="Loginform-social"/>
                            <AiFillGoogleCircle href="#"className = "Loginform-social"/>
                            <AiFillLinkedin href ="#"className = "Loginform-social"/>
                        </div>
                        <div className="loginform-p">or use your email for registration</div>
                        <input className="loginform-input" type="text" name="txt" placeholder="Name" required="" />
                        <input className="loginform-input" type="email" name="email" placeholder="Email" required="" />
                        <input className="loginform-input" type="password" name="pswd" placeholder="Password" required="" />
                        <button className="loginform-button">Sign Up</button>
                    </div>
                </div>
                <div className={`loginform-signin ${isRightPanelActive ? 'right-panel-active' : ''}`}>
                    <div className="loginform-form" action="#">
                        <div className="loginform-h1">Sign In</div>
                        <div className="loginform-social-container">
                            <AiFillFacebook href="https://www.facebook.com/"className ="Loginform-social"/>
                            <AiFillGoogleCircle href="#"className = "Loginform-social"/>
                            <AiFillLinkedin href ="#"className = "Loginform-social"/>
                        </div>
                        <div className="loginform-p">or use your account</div>
                        <input className="loginform-input" type="email" name="email" placeholder="Email" required="" />
                        <input className="loginform-input" type="password" name="pswd" placeholder="Password" required="" />
                        <a href="#">Forgot your Password?</a>
                        <button className="loginform-button" onClick={handleSignIn}>Sign In</button>
                    </div>
                </div>
                <div className="loginform-overlay-container">
                    <div className="loginform-overlay">
                        <div className="loginform-overlay-left">
                            <div className="loginform-h1">Welcome Back!</div>
                            <div className="loginform-p">To keep connected with us please login with your personal info</div>
                            <button className="loginform-button" id="signIn" onClick = {signUpButtonHandler}>Sign In</button>
                        </div>
                        <div className="loginform-overlay-right">
                            <div className="loginform-h1">Hello, Friend</div>
                            <div className="loginform-p">Enter your personal details and start your journey with us</div>
                            <button className="loginform-button" id="signUp" onClick={signInButtonHandler} >Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;