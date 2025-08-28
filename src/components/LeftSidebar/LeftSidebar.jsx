import React, { useState } from 'react';
import "./LeftSidebar.css";
import assets from "../../assets/assets";
import { CiMenuKebab } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const LeftSidebar = () => {
    const[open,setOpen] = useState(false);
    const navigate = useNavigate();
    const navigateToProfilrUpdate = () => {
        navigate('/profile')
    }
    const navigateToLogout = () => {
        navigate('/')
    }
  return (
    <div className='ls'>
        <div className="ls-top">
            <div className="ls-nav">
                <img src={assets?.chat} className="logo" alt="" />
                <h2>Chat Box</h2>
                <div className="menu">
                    <CiMenuKebab className='menu-icon' onClick={()=>{setOpen(!open)}}/>
                   {open && <div className="sub-menu">
                        <p onClick={navigateToProfilrUpdate}>Edit Profile</p>
                        <hr />
                        <p onClick={navigateToLogout}>Logout</p>
                    </div>}
                </div>
            </div>
            <div className="ls-search">
                <FaSearch />
                <input type="text" placeholder='seach here..' />
            </div>
        </div>

        <div className="ls-list">
           {Array(12).fill("").map((item,index)=>(
            <div key={index} className="friends">
                <img src={assets.avatar1} alt="" />
                <div className='p-name'>
                    <p>Arshad</p>
                    <span>Hello, How are you?</span>
                </div>
            </div>
           ))}
        </div>
    </div>
  )
}

export default LeftSidebar