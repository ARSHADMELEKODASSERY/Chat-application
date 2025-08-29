import React, { useContext, useState } from "react";
import "./LeftSidebar.css";
import assets from "../../assets/assets";
import { CiMenuKebab } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { AppContext } from "../../context/AppContext";
import { db } from "../../config/firebase";

const LeftSidebar = () => {
  const navigate = useNavigate();
  const { userData } = useContext(AppContext);

  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState(null);
  const [showSearch, setShowSearch] = useState(false);

  const inputHandler = async (e) => {
    try {
      const input = e.target.value;
      if (input) {
        setShowSearch(true);
        const useRef = collection(db, "users");
        const q = query(useRef, where("userName", "==", input?.toLowerCase()));
        const querySnap = await getDocs(q);
        if (!querySnap.empty && querySnap.docs[0]?.data?.id != userData.id) {
          setUsers(querySnap.docs[0]?.data());
        }
      } else {
        setShowSearch(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="ls">
      <div className="ls-top">
        <div className="ls-nav">
          <img src={assets?.chat} className="logo" alt="" />
          <h2>Chat Box</h2>
          <div className="menu">
            <CiMenuKebab
              className="menu-icon"
              onClick={() => {
                setOpen(!open);
              }}
            />
            {open && (
              <div className="sub-menu">
                <p onClick={() => navigate("/profile")}>Edit Profile</p>
                <hr />
                <p onClick={() => navigate("/")}>Logout</p>
              </div>
            )}
          </div>
        </div>
        <div className="ls-search">
          <FaSearch />
          <input
            onChange={inputHandler}
            type="text"
            placeholder="seach here.."
          />
        </div>
      </div>

      <div className="ls-list">
        {/* {Array(12).fill("").map((item,index)=>(
            <div key={index} className="friends">
                <img src={assets.avatar1} alt="" />
                <div className='p-name'>
                    <p>Arshad</p>
                    <span>Hello, How are you?</span>
                </div>
            </div>
           ))} */}
        {showSearch && users ? (
          <div className="friends">
            <img src={assets.avatar1} alt="" />
            <div className="p-name">
              <p>{users.name}</p>
              <span>{users?.bio}</span>
            </div>
          </div>
        ) : (
          <>
            {Array(12)
              .fill("")
              .map((item, index) => (
                <div key={index} className="friends">
                  <img src={assets.avatar1} alt="" />
                  <div className="p-name">
                    <p>Arshad</p>
                    <span>Hello, How are you?</span>
                  </div>
                </div>
              ))}{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default LeftSidebar;
