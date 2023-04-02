import React from 'react';
import { GrNotification } from 'react-icons/gr';

const Navbar = () => {
  return (
    <div className="flex fixed w-full justify-center md:justify-start top-0 h-14 md:h-20 px-12 items-center bg-white shadow-sm z-30">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/StockX_logo.svg" alt="logo" className='w-32 h-32' />
      <input
        type="text"
        className="hidden md:block p-2 outline-none border-[0.5px] border-gray-800 w-full h-10 mx-3 md:mx-6 lg:mx-9 text-sm text-gray-800"
        placeholder="Seacrh for brand, color, etc"
      />
      <div className="hidden md:flex items-center mr-6">
        <a className='mr-2 lg:mr-6 cursor-pointer text-xs lg:text-base'>Browse</a>
        <a className='mr-2 lg:mr-6 cursor-pointer text-xs lg:text-base'>New</a>
        <a className='mr-2 lg:mr-6 cursor-pointer text-xs lg:text-base'>About</a>
        <a className='mr-2 lg:mr-6 cursor-pointer text-xs lg:text-base'>Help</a>
        <a className='mr-2 lg:mr-6 cursor-pointer text-xs lg:text-base'>Sell</a>
        <GrNotification size={20} className="cursor-pointer" />
      </div>
      <div className='hidden md:flex items-center text-md'>
        <button className='border border-gray-800 p-1 px-4 font-semibold mr-2 hover:bg-black hover:text-white duration-200 transition-all ease-in'>Login</button>
        <button className='border border-gray-800 bg-black/80 hover:bg-black duration-200 transition-all ease-in text-[#ffffff] p-1 px-4 font-semibold whitespace-nowrap'>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
