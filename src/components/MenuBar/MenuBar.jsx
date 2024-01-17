import React, { useState } from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import homeIcon from "../../media/hut.png"
import globeIcon from "../../media/globe.png"
import groupIcon from "../../media/people.png"
import jobIcon from "../../media/suitcase.png"

export const MenuBar = () => {

    const [publicDropdown, setPublicDropdown] = useState(true);
    const [selectedPublicOption, setSelectedPublicOption] = useState("Questions");

    const handlePublicDropdown = () => {
        setPublicDropdown(!publicDropdown);
    }

    const handleSelectedPublicOption = (option) => {
        setSelectedPublicOption(option);
    } 

  return (
    <div className="menu-bar-container fixed flex flex-col justify-between h-[80vh] left-0">
        <div className="menu-bar-options flex pl-[110px] items-center">
            <ul className="flex flex-col gap-7">
                <li className="flex gap-5 items-center cursor-pointer">
                    <img src={homeIcon} alt="home-icon" className="h-5" />
                    <p className="font-semibold">Home</p>
                </li>
                <li className="cursor-pointer">
                    <div className="flex gap-5 items-center" onClick={handlePublicDropdown}>
                        <img src={globeIcon} alt="home-icon" className="h-5" />
                        <p className="font-semibold">Public</p>
                        {publicDropdown && (<ExpandLessIcon className="ml-10" />)}
                    </div>
                    {
                        publicDropdown && (
                            <div className="flex flex-col gap-2 ml-10 mt-4">
                            <p
                                className={`font-semibold ${
                                selectedPublicOption === 'Questions'
                                    ? 'border-r-[3px] text-orange-500 border-orange-500'
                                    : ''
                                }`}
                                onClick={() => handleSelectedPublicOption('Questions')}
                            >
                                Questions
                            </p>
                            <p
                                className={`font-semibold ${
                                selectedPublicOption === 'Tags' ? 'border-r-[3px] text-orange-500 border-orange-500' : ''
                                }`}
                                onClick={() => handleSelectedPublicOption('Tags')}
                            >
                                Tags
                            </p>
                            <p
                                className={`font-semibold ${
                                selectedPublicOption === 'Users' ? 'border-r-[3px] text-orange-500 border-orange-500' : ''
                                }`}
                                onClick={() => handleSelectedPublicOption('Users')}
                            >
                                Users
                            </p>
                            </div>
                        )
                    }
                </li>
                <li className="flex gap-5 items-center cursor-pointer">
                    <img src={groupIcon} alt="home-icon" className="h-5" />
                    <p className="font-semibold">Collectives</p>
                </li>
                <li className="flex gap-5 items-center cursor-pointer">
                    <img src={jobIcon} alt="home-icon" className="h-5" />
                    <p className="font-semibold">Jobs</p>
                </li>
            </ul>
        </div>

        <div className="menu-bar-buttons flex flex-col ml-[60px] justify-between items-center gap-4">
            <button className="border-2 border-[#f48024] w-full text-[#f48024] rounded-md p-2">
                Log in
            </button>
            <button className="bg-[#f48024] w-full text-white rounded-md p-2">
                Sign up
            </button>
        </div>
    </div>
  )
}
