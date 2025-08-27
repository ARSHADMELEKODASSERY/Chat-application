import React, { useState } from "react";
import "./ProfileUpdate.css";
import assets from "../../assets/assets";

const ProfileUpdate = () => {
  const [image,setImage] = useState(false)
  console.log("🚀 ~ ProfileUpdate ~ image:", image)
  return (
    <div className="ptofile">
      <div className="profile-container">
        <form>
          <h3>Profile Details</h3>
          <label htmlFor="avatar">
            <input type="file" onChange={(e)=>{setImage(e.target.files[0])}} id="avatar" accept="image/png, image/jpeg, image/jpg"  hidden />
            <img className="avatar-profile" src={image ? URL.createObjectURL(image) : assets.avatar1} alt="" />
            Upload profile image
          </label>
          <input type="text" placeholder="your name" required />
          <textarea placeholder="write profile bio" required></textarea>
          <button type="submit">Save</button>
        </form>
        <img className="profile-pic" src={image ? URL.createObjectURL(image) : assets?.chat} alt="" />
      </div>
    </div>
  );
};

export default ProfileUpdate;
