import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt3ijyF7tbpv58-DMzW8fHfUMAgHPmIVY",
  authDomain: "chat-app-1-bf3f2.firebaseapp.com",
  projectId: "chat-app-1-bf3f2",
  storageBucket: "chat-app-1-bf3f2.firebasestorage.app",
  messagingSenderId: "204292159168",
  appId: "1:204292159168:web:ae315cc5014c3b63aa9f25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (userName,email,password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await setDoc(doc(db,"users",user.uid),{
            id: user.uid,
            userName: userName.toLowerCase(),
            email,
            name:"",
            avatar: "",
            bio: "Hey, There i am using chat app",
            lastSeen:Date.now()
        })
        await setDoc(doc(db,"chats",user.uid),{
            chatData:[]
        })
    } catch (error) {
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
        
    }
}

const login = async (email,password) => {
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
        
    }
}

const logout = async () => {
    try {
        await signOut(auth)

    } catch (error) {
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));   
    }
}

export {signup,login, logout,auth,db}