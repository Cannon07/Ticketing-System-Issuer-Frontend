import React, { useState } from 'react'
import { MdRemoveRedEye } from 'react-icons/md';
import { FcApprove } from "react-icons/fc";
import { FcCheckmark } from "react-icons/fc";
import { CheckmarkIcon } from 'react-hot-toast';
import { AiOutlineClose } from "react-icons/ai";
import { PiHourglassLowFill } from "react-icons/pi";

import { FaRegHourglass } from "react-icons/fa6";




interface User {
    userDid: string;
    firstName: string;
    lastName: string;
    address: string;
    dateOfBirth: string;
    gender: string;
    placeOfBirth: string;
    proofId: string;
    docType: string;
}


interface UserCardProps {

    user: User;
}


const PendingContent: React.FC<UserCardProps> = ({ user }) => {

    const [toggle, setToggle] = useState(false);

    function truncateString(str: string, maxLength: number) {
        return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
    }



    const handleCardClick = () => {
        setToggle(!toggle);
    }



    return (

        <div key={user.userDid} className="mb-4">
            <div onClick={handleCardClick} className={`rounded-lg bg-white dark:bg-darkmode-theme-light p-8 shadow-md h-full w-auto ${!toggle?'dark:hover:bg-gray-700 hover:bg-gray-200 cursor-pointer':''}  `}>
                <div  className={`flex justify-between items-center ${toggle?'mb-4':''}`}>
                    <h3 className="text-xl font-bold">{user.firstName} {user.lastName}</h3>
                    <div className="flex items-center space-x-4">
                        <div>
                            <span
                                className="inline-block"
                                data-twe-toggle="tooltip"
                                title="Issue VC">
                                <button className='btn-sm dark:hover:bg-gray-700 hover:bg-gray-200'>
                                    <FcCheckmark size={'20px'} />
                                </button>

                            </span>

                            <span
                                className="inline-block"
                                data-twe-toggle="tooltip"
                                title="Reject Request">
                                <button className={"btn-sm dark:hover:bg-gray-700 hover:bg-gray-200"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                                        <path fill="#F44336" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)"></path><path fill="#F44336" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)"></path>
                                    </svg>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
                <hr className={`${toggle?'h-px w-full dark:bg-gray-600 border-0 bg-gray-200 mb-4':'hidden'}`} />
                <div className=''>

                    {toggle &&

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                            <p className="text-sm text-gray-700 dark:text-gray-300 col-span-1 mb-2 lg:col-span-3 md:col-span-3">
                                <span className="font-semibold">Decentralized Identifier: </span>
                                <span className='hidden md:contents lg:contents'>{user.userDid}</span>
                                <span className='lg:hidden md:hidden '>
                                   { truncateString(user.userDid,35)}
                                </span>

                            </p>
                            
                            
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                                <span className="font-semibold">Document type: </span>
                                {user.docType}
                            </p>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                                <span className="font-semibold">Date of Birth: </span>
                                {user.dateOfBirth}
                            </p>


                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                                <span className="font-semibold">Place of Birth: </span>
                                {user.placeOfBirth}
                            </p>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                                <span className="font-semibold">Address: </span>
                                {user.address}
                            </p>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                                <span className="font-semibold">Gender: </span>
                                {user.gender}
                            </p>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                                <span className="font-semibold">Proof Id: </span>
                                <a href={`${user.proofId}`} target="_blank" rel="noopener noreferrer" className="underline hover:dark:text-white hover:text-black">View Document</a>
                            </p>

                        </div>
                    }

                </div>

            </div>
        </div>



    )
}

export default PendingContent;
