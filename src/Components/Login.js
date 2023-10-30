import React, { useRef, useState } from 'react'
import Header from './Header';
import { CheckValidition } from '../Utils/LoginValidition';

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const SubmitBtnClick = () => {
    const errMsg = CheckValidition(email.current.value, password.current.value);
    seterrorMessage(errMsg);
  }

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  }

  return (
    <div>

      <Header />

      <div className='absolute'>
        <img className='w-screen h-screen' src='https://miro.medium.com/v2/resize:fit:1400/format:webp/1*5lyavS59mazOFnb55Z6znQ.png' />
      </div>

      <form className='bg-black bg-opacity-80 text-white h-auto w-96 py-10 px-10 m-5 mx-auto my-auto top-20 right-0 left-0 absolute rounded-lg ' onSubmit={(e) => (e.preventDefault())}>
        <h1 className='p-2 my-2 font-bold text-3xl'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && (<input type='text' placeholder='User Name' className='p-3 my-4 w-72 bg-slate-800 rounded-md' />)}
        {!isSignIn && (<input type='number' placeholder='Enter Your Phone Number' className='p-3 my-4 w-72 bg-slate-800 rounded-md' />)}

        <input type='email' ref={email} placeholder='Email Address' className='p-3 my-4 w-72 bg-slate-800 rounded-md' />
        <input type='password' ref={password} placeholder='Password' className='p-3 my-4 w-72 bg-slate-800 rounded-md' />

        <p className='text-red-600 font-bold py-2'>{errorMessage}</p>
        <button className='p-3 my-5 bg-red-700 w-72 font-bold rounded-lg ' onClick={SubmitBtnClick}>{isSignIn ? "Sign In" : "Sign Up"}</button>
        <p className='cursor-pointer py-4' onClick={toggleForm} style={{ color: isSignIn ? "white" : "skyblue" }}>{isSignIn ? "New to Net Show ? Sign Up now" : "Already A User ? Sign In Now "}</p>
      </form>

    </div>
  )
};

export default Login;