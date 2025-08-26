import React from 'react';
import { TfiHelpAlt } from "react-icons/tfi";
import { GoDotFill } from "react-icons/go";
import "./ChatBox.css";
import assets from '../../assets/assets';
import { IoIosSend } from "react-icons/io";
import { TfiGallery } from "react-icons/tfi";

const ChatBox = () => {
  return (
    <div className='chat-box'>
      {/* Top secssion */}
      <div className="chat-user">
        <img src={assets.avatar1} alt="" />
        <p>Adwaid PVR <GoDotFill className='online-icon' /></p>
        <TfiHelpAlt className='help' />
      </div>
     {/* message secssion */}
     <div className="chat-msg">
      <div className="s-msg">
        <p className='msg'>You can give up!!</p>
      <div className='img-text'>
        <img className="avtr" src={assets.avatar1} alt="" />
        <p>2:30 PM</p>
      </div>
      </div>
      <div className="s-msg">
        <img className="msg-imge" src={assets.chat} />
      <div className='img-text'>
        <img className="avtr" src={assets.avatar1} alt="" />
        <p>2:30 PM</p>
      </div>
      </div>
      <div className="r-msg">
        <p className='msg'>Hey !,How are you</p>
      <div className='img-text'>
        <img className="avtr" src={assets.avatar1} alt="" />
        <p>2:30 PM</p>
      </div>
      </div>
     </div>
     {/* Bottom ***** */}
      <div className="chat-input">
        <input type="text" placeholder='Send a message' />
        <input type="file" id="image" accept='image/png, image/jpeg' hidden />
        <label htmlFor="image">
          <TfiGallery className='chat-icon' />
        </label>
        <IoIosSend className='chat-icon' />
      </div>
    </div>
  )
}

export default ChatBox