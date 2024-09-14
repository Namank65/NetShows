import React from 'react';
import logo from "../Images/logo.png"
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { GrInstagram } from 'react-icons/gr';

const Footer = () => {
  return (
    <div className="text-white bg-black relative flex justify-center cursor-default">
        <div className='flex flex-col items-center gap-5 pb-5'>

      <img src={logo} alt="logo" className="opacity-80 w-40  mt-8 sm:m-5  ml-4" />

      <ul className="flex gap-8">
          <a href="https://github.com/Namank65">
            <FaGithub className="hover:text-red-500 size-5  text-white ease-in-out duration-150  hover:scale-125 " />
          </a>
          <a href="https://x.com/NamanKu39911889">
            <BsTwitterX className="hover:text-red-500 size-5  text-white ease-in-out duration-150  hover:scale-125 cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/souamya/">
            <FaLinkedin className="hover:text-red-500 size-5  text-white ease-in-out duration-150  hover:scale-125 cursor-pointer" />
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox">
            <SiGmail className="hover:text-red-500 size-5  text-white ease-in-out duration-150 hover:scale-125 cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/developer_naman/">
            <GrInstagram className="hover:text-red-500 size-5 text-white ease-in-out duration-150  hover:scale-125 cursor-pointer" />
          </a>
        </ul>
        <div className='flex flex-col items-center'>
            <p className='text-gray-500 text-xs gap '>Made With ❤️ By Souamya and Copyrighted by SouamyaDev Pvt.Ltd. </p>
            <span className='text-gray-500 text-xs underline' > @ 2024 All Right Reserved</span>
            </div>
        </div>
    </div>
  )
}

export default Footer
