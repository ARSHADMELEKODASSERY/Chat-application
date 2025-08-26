import React from 'react';
import "./LeftSidebar.css";
import assets from "../../assets/assets";
import { CiMenuKebab } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";



const LeftSidebar = () => {
  return (
    <div className='ls'>
        <div className="ls-top">
            <div className="ls-nav">
                <img src={assets?.chat} className="logo" alt="" />
                <div className="menu">
                    {/* <img src="" alt="" /> */}
                    <CiMenuKebab className='menu-icon'/>
                </div>
            </div>
            <div className="ls-search">
                <FaSearch />
                <input type="text" placeholder='seach here..' />
            </div>
        </div>
        <div className="ls-list">
            <div className="friends">
                <img src={assets.avatar1} alt="" />
                <div>
                    <p>Arshad</p>
                    <span>Hello, How are you?</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeftSidebar