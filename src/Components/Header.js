import React from 'react';
import logo from "../Images/logo.png";


const Header = () => {
  return (
    <div className='absolute bg-gradient-to-b from-black z-10 w-screen'>
      <img alt='logo' src={logo} className=' w-64 '/>
    </div>
  )
};

export default Header;