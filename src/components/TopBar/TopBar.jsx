import React from 'react'
import logo from "../../media/logo-stackoverflow.png"
import SearchIcon from '@mui/icons-material/Search';

export const TopBar = () => {
  return (
    <div className="top-bar-container grid grid-cols-4 gap-4 items-center p-4 shadow-lg fixed top-0 left-0 right-0 bg-white z-10">
        <div className="logo-container flex justify-center items-center">
            <img className="logo h-8" src={logo} alt="logo" />
        </div>
        <div className="search-container col-span-2 bg-[#f4f6f8] flex gap-4 items-center p-3 rounded-lg">
            <SearchIcon className="search-icon" />
            <input className="search-input w-full bg-[#f4f6f8] focus:outline-none" type="text" placeholder="Search" />
        </div>
        <div className="top-bar-options">
            <ul className="flex justify-center items-center gap-10">
                <li className='cursor-pointer hover:text-[#f6984d] font-medium'>About</li>
                <li className='cursor-pointer hover:text-[#f6984d] font-medium'>Product</li>
                <li className='cursor-pointer hover:text-[#f6984d] font-medium'>For teams</li>
            </ul>
        </div>
    </div>
  )
}
