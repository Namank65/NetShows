import React, { useRef, useState } from 'react'
import Header from './Header';
import { CheckValidition } from '../Utils/LoginValidition';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../Utils/fireBase';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/UserSlice';
import {LogInBgImg, USER_AVTAR} from "../Utils/Constants"

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const SubmitBtnClick = () => {
    const errMsg = CheckValidition(email.current.value, password.current.value);
    seterrorMessage(errMsg);

    if (errMsg) return;

    if (!isSignIn) {
      // Sign Up logic here
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: USER_AVTAR
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

          }).catch((error) => {
            // An error occurred
            seterrorMessage(error.message)
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + " - " + errorMessage)
        });

    } else {
      //Sign In Logic here
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + " - " + errorMessage);
        });
    }

  };

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  }

  return (
    <div>

      <Header />

      <div className='absolute'>
        <img className='w-screen h-screen' alt='LogInBgImg' src={LogInBgImg} />
      </div>

      <form className='bg-black bg-opacity-80 text-white h-auto w-96 py-10 px-10 m-5 mx-auto my-auto top-[60px] right-0 left-0 absolute rounded-lg ' onSubmit={(e) => (e.preventDefault())}>
        <h1 className='p-2 my-2 font-bold text-3xl'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && (<input type='text' ref={name} placeholder='User Name' className='p-3 my-4 w-72 bg-slate-800 rounded-md' />)}
        {!isSignIn && (<input type='number' placeholder='Enter Your Phone Number' className='p-3 my-4 w-72 bg-slate-800 rounded-md' />)}

        <input type='email' ref={email} placeholder='Email Address' className='p-3 my-4 w-72 bg-slate-800 rounded-md' />
        <input type='password' ref={password} placeholder='Password' className='p-3 my-4 w-72 bg-slate-800 rounded-md' />

        <p className='text-red-600 font-bold py-2'>{errorMessage}</p>
        <button className='p-3 my-5 bg-red-700 w-72 font-bold rounded-lg hover:bg-red-800 ' onClick={SubmitBtnClick}>{isSignIn ? "Sign In" : "Sign Up"}</button>
        <p className='cursor-pointer py-4' onClick={toggleForm} style={{ color: isSignIn ? "white" : "skyblue" }}>{isSignIn ? "New to Net Show ? Sign Up now" : "Already A User ? Sign In Now "}</p>
      </form>

    </div>
  )
};

export default Login;