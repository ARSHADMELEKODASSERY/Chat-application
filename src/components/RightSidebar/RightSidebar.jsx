import React from 'react';
import "./RightSidebar.css";
import assets from '../../assets/assets';
import { GoDotFill } from "react-icons/go";


const RightSidebar = () => {
  return (
    <div className='rs'>
      <div className="rs-profile">
        <img src={assets.avatar1} alt="" />
        <h3>ARSHAD <GoDotFill style={{color:'green'}}/></h3>
        <p>Hey,There i am Arshad using chat app!</p>
      </div>
      <hr />
      <div className="rs-media">
        <p>Media</p>
        <div>
          <img src={assets.avatar1} alt="" />
          <img src={assets.avatar1} alt="" />
          <img src={assets.avatar1} alt="" />
          <img src={assets.avatar1} alt="" />
          <img src={assets.avatar1} alt="" />
          <img src={assets.avatar1} alt="" />
        </div>
      </div>
      <button>Logout</button>
    </div>
  )
}

export default RightSidebar