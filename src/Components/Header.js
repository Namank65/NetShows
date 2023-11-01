import React from 'react';
import logo from "../Images/logo.png";
import { auth } from '../Utils/fireBase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  
  const SignOutHandeler = () => {
    signOut(auth).then(() => {
    // Sign-out successful.
    navigate("/");

  }).catch((error) => {
    // An error happened.
    navigate("/error");
  });
  }


  return (
    <div className='flex absolute bg-gradient-to-b from-black z-10 w-screen justify-between'>
      <img alt='logo' src={logo} className=' w-64 '/>

      {user && ( <div className='flex my-2 p-4'>
        <img className='w-16 rounded-full' alt='UserPic' src={user?.photoURL}/>
        <button className='px-2 font-bold bg-red-700 text-white rounded-lg hover:bg-red-800' onClick={SignOutHandeler}>Log Out</button>
      </div>)}

    </div>
    
  )
};

export default Header;