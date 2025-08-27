import React, { useState } from 'react';
import assets from "../../assets/assets";
import { signup , login} from '../../config/firebase'
import "./Login.css";


const Login = () => {
  const [currentState,setCurrentState] = useState("Sign Up");
  const [userName,setUserName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const onSubmitHandler =  (event) => {
    event.preventDefault();
    if(currentState === "Sign Up"){
      signup(userName,email,password)
    }else{
      login(email,password)
    }
  }

  return (
    <div className='login'>
        <img src={assets.chatbackground} alt="" className='logo'/>
        <form onSubmit={onSubmitHandler} className="login-form">
            <h2>{currentState}</h2>
            {currentState === "Sign Up" &&
            <input 
              onChange={(e)=>setUserName(e.target.value)} 
              type="text" 
              placeholder="username" 
              className="form-input" 
              value={userName}
              required/>
              }            
            <input 
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
              type="email" placeholder="Email address" className="form-input" required/>
            <input 
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
              type="password" placeholder="Password" className="form-input" required/>
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