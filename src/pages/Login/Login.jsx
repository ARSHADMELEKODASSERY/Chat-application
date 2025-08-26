import React, { useState } from 'react';
import assets from "../../assets/assets"
import "./Login.css";


const Login = () => {
  const [currentState,setCurrentState] = useState("Sign Up")
  return (
    <div className='login'>
        <img src={assets.chatbackground} alt="" className='logo'/>
        <form className="login-form">
            <h2>{currentState}</h2>
            {currentState === "Sign Up" &&<input type="text" placeholder="username" className="form-input" required/>}            
            <input type="email" placeholder="Email address" className="form-input" required/>
            <input type="password" placeholder="Password" className="form-input" required/>
            <button type='submit' className='signup'>{currentState === "Sign Up" ? "Create account" : "Login"}</button>
            {currentState === "Sign Up" &&
            <div className="login-term">
                <input type="checkbox" />
                <p>Agree to the terms of use & privacy policy</p>
            </div>
            }
            <div className="login-forgot">
                {currentState === "Sign Up" ? (
                  <p className="login-toggle">Already have an account{" "}<span onClick={()=>setCurrentState("Login")}>click here</span></p>):(
                  <p className="login-toggle">Don't have an account?{" "}<span onClick={()=>setCurrentState("Sign Up")}>Sign up</span></p>)
                }
            </div>
        </form>
    </div>
  )
}

export default Login