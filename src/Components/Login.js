import React from 'react'
import Header from './Header';

const Login = () => {
  return (
    <div>

      <Header />


      <div className='absolute'>
        <img className='w-screen h-screen' src='https://miro.medium.com/v2/resize:fit:1400/format:webp/1*5lyavS59mazOFnb55Z6znQ.png' />
      </div>

      <form className='bg-black bg-opacity-80 text-white h-auto w-96 py-10 px-10 m-5 mx-auto my-auto top-36 right-0 left-0 absolute rounded-lg '>
        <h1 className='p-2 my-2 font-bold text-3xl'>Sign In</h1>
        <input type='email' placeholder='Email' className='p-3 my-4 w-72 bg-slate-800 rounded-md' />
        <input type='password' placeholder='Password' className='p-3 my-4 w-72 bg-slate-800 rounded-md' />
        <button className='p-3 my-5 bg-red-700 w-72 font-bold rounded-lg '>Sign In</button>
        <p className='cursor-pointer'>New to Net Show? Sign Up now</p>
      </form>

    </div>
  )
}

export default Login;