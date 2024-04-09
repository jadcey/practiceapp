// import {useNavigate} from 'react-router-dom';
// import '../Css/LoginForm.css';
// const LoginForm=()=>{
//     const navigate = useNavigate();
//     const loginform = () =>{
//         navigate('/login')
//     }
//     return(
//         <div className ="loginform-body" id="main">
//             <div className="loginform-container">
//                 <div className ="loginform-signup">
//                     <div className="loginform-form" action="#">
//                         <div className ="loginform-h1">Create Account</div>
//                         <div className = "loginform-social-container">
//                             <a href ="#" className = "loginform-social">Facebook</a>
//                             <a href ="#" className = "loginform-social">Google</a>
//                             <a href ="#" className = "loginform-social">LinkedIn</a>
//                         </div>
//                         <div className= "loginform-p">or use your email for registration</div>
//                         <input className = "loginform-input" type="text" name="txt" placeholder="Name" required=""/>
//                         <input className = "loginform-input" type="email" name="email" placeholder="Email" required=""/>
//                         <input className = "loginform-input" type="password" name="pswd" placeholder="Password" required=""/>
//                         <button className= "loginform-button">Sign Up</button>
//                     </div>
//                 </div> 
//                 <div className ="loginform-signin">
//                     <div className="loginform-form" action="#">
//                         <div className = "loginform-h1">Sign In</div>
//                         <div className = "loginform-social-container">
//                             <a href ="#" className = "loginform-social">Facebook</a>
//                             <a href ="#" className = "loginform-social">Google</a>
//                             <a href ="#" className = "loginform-social">LinkedIn</a>
//                         </div>
//                         <div className = "loginform-p">or use your account</div>
//                         <input className = "loginform-input" type="email" name="email" placeholder="Email" required=""/>
//                         <input className = "loginform-input" type="password" name="pswd" placeholder="Password" required=""/>
//                         <a href="#">Forgot your Password?</a>
//                         <button className="loginform-button">Sign In</button>
//                     </div>        
//                 </div>
//                 <div className = "loginform-overlay-container">
//                     <div className ="loginform-overlay">
//                         <div className = "loginform-overlay-left">
//                             <div className = "loginform-h1">Welcome Back!</div>
//                             <div className = "loginform-p">To keep connected with us pelase login with your personal info</div>
//                             <button className ="loginform-button" id="loginform-signIn">Sign In</button>
//                         </div>
//                         <div className = "loginform-overlay-right">
//                             <div className = "loginform-h1">Hello, Friend</div>
//                             <div className = "loginform-p">Enter your personal details and start your journey with us</div>
//                             <button className ="loginform-button" id="loginform-signUp">Sign Up</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <script type="text/javascript">
//                 const signUpButton = document.getElementById('signUp');
//                 const signInButton = document.getElementById('signIn');
//                 const main = document.getElementById('main');

//                 signUpButton.addEventListener('click', () =>{
//                     main.classList.add("right-panel-active")
//                 });
//                 signInButton.addEventListener('click',() =>{
//                     main.classList.remove("right-panel-active")
//                 });
//             </script>
//         </div>
       
//     );
// }
// export default LoginForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/LoginForm.css';

const LoginForm = () => {
    const navigate = useNavigate();
    const [isSignUpActive, setIsSignUpActive] = useState(false);

    const handleSignUpClick = () => {
        const main = document.getElementById('main');
        if (main) {
            main.classList.add("right-panel-active");
            setIsSignUpActive(true);
        }
    };

    const handleSignInClick = () => {
        const main = document.getElementById('main');
        if (main) {
            main.classList.remove("right-panel-active");
            setIsSignUpActive(false);
        }
    };

    const handleSignIn = () => {
        navigate('/login');
    };

    return (
        <div className="loginform-body" id="main">
            <div className="loginform-container">
                <div className={`loginform-signup ${isSignUpActive ? 'right-panel-active' : ''}`}>
                    <div className="loginform-form" action="#">
                        <div className="loginform-h1">Create Account</div>
                        <div className="loginform-social-container">
                            <a href="#" className="loginform-social">Facebook</a>
                            <a href="#" className="loginform-social">Google</a>
                            <a href="#" className="loginform-social">LinkedIn</a>
                        </div>
                        <div className="loginform-p">or use your email for registration</div>
                        <input className="loginform-input" type="text" name="txt" placeholder="Name" required="" />
                        <input className="loginform-input" type="email" name="email" placeholder="Email" required="" />
                        <input className="loginform-input" type="password" name="pswd" placeholder="Password" required="" />
                        <button className="loginform-button">Sign Up</button>
                    </div>
                </div>
                <div className={`loginform-signin ${isSignUpActive ? '' : 'right-panel-active'}`}>
                    <div className="loginform-form" action="#">
                        <div className="loginform-h1">Sign In</div>
                        <div className="loginform-social-container">
                            <a href="#" className="loginform-social">Facebook</a>
                            <a href="#" className="loginform-social">Google</a>
                            <a href="#" className="loginform-social">LinkedIn</a>
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
                            <button className="loginform-button" id="signIn" onClick={handleSignInClick}>Sign In</button>
                        </div>
                        <div className="loginform-overlay-right">
                            <div className="loginform-h1">Hello, Friend</div>
                            <div className="loginform-p">Enter your personal details and start your journey with us</div>
                            <button className="loginform-button" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;

            