import React, { useEffect } from 'react';
import logo from "../Images/logo.png";
import { auth } from '../Utils/fireBase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utils/UserSlice';


const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

  const SignOutHandeler = () => {
    signOut(auth).then(() => {
      // Sign-out successful.

    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");

      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubcribe();

  }, [])


  return (
    <div className='flex absolute bg-gradient-to-b from-black z-10 w-screen justify-between pr-5 h-24  overflow-x-hidden'>
      <img alt='logo' src={logo} className=' w-48' />

      {user && (<div className='flex w-[12%]  p-4'>
        <img className='w-14 p-2 rounded-full' alt='UserPic' src={user?.photoURL} />
        <button className='px-2 py-2 font-bold bg-red-700 text-white rounded-lg hover:bg-red-800' onClick={SignOutHandeler}>Log Out</button>
      </div>)}

    </div>

  )
};

export default Header;