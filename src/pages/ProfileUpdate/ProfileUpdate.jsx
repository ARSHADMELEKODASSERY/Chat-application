import React, { useEffect, useState, useContext } from "react";
import "./ProfileUpdate.css";
import assets from "../../assets/assets";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../config/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import upload from "../../lib/upload";
import { AppContext } from '../../context/AppContext';

const ProfileUpdate = () => {
  const navigate = useNavigate();
  const [image,setImage] = useState(false);
  const [name,setName] = useState("");
  const [bio,setBio] = useState("");
  const [uid,setUid] = useState("");
  const [prevImage,setPrevImage] = useState("");
  const { setUserData } = useContext(AppContext);

  const profileUpdate = async(event)=>{
    event.preventDefault();
    try {
      // if(!prevImage && !image){
      //   toast.error('Upload Profile Picture')
      // }
       const docRef = doc(db,'users',uid);
       if (image) {
        const imgUrl = await upload(image);
        setPrevImage(imgUrl);
        await updateDoc(docRef,{
          avatar: imgUrl,
          bio: bio,
          name: name
        })
       }else{
        await updateDoc(docRef,{
          name: name,
          bio: bio
        })
       }
       const snap = await getDoc(docRef);
       setUserData(snap.data());
       navigate('/chat');
    } catch (error) {
      console.error(error);
      toast.error(error.message);
      
      
    }
  }

useEffect(() => {
onAuthStateChanged(auth,async (user) => {
  if(user){
    setUid(user.uid)
    const docRef = doc(db,"users",user.uid);
    const docSnap = await getDoc(docRef);
    if(docSnap.data().name){
      setName(docSnap.data().name)
    }
    if(docSnap.data().bio){
      setBio(docSnap.data().bio)
    }
    if(docSnap.data().avatar){
      setPrevImage(docSnap.data().avatar)
    }
  }else{
    navigate('/')
  }
})
},[]);

  return (
    <div className="ptofile">
      <div className="profile-container">
        <form onSubmit={profileUpdate}>
          <h3>Profile Details</h3>
          <label htmlFor="avatar">
            <input type="file" onChange={(e)=>{setImage(e.target.files[0])}} id="avatar" accept="image/png, image/jpeg, image/jpg"  hidden />
            <img className="avatar-profile" src={image ? URL.createObjectURL(image) : assets.avatar1} alt="" />
            Upload profile image
          </label>
          <input type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder="your name" required />
          <textarea onChange={(e)=>setBio(e.target.value)} value={bio} placeholder="write profile bio" required></textarea>
          <button type="submit">Save</button>
        </form>
        <img className="profile-pic" src={image ? URL.createObjectURL(image) : assets?.chat} alt="" />
      </div>
    </div>
  );
};

export default ProfileUpdate;
