import React, { useState } from 'react';
import Image from "next/image";
import { FaIdCard } from "react-icons/fa";

interface Details {
  userDid: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}


interface DetailsCardProps {
  user: Details;
}

const RejectedRequests: React.FC<DetailsCardProps> = ({ user }) => {

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
              
              <div className="flex rounded overflow-hidden h-auto">
                  <div className="w-1/6 h-auto mt-3">
                  <FaIdCard size={50}/>
                  </div>
                  <div className="w-5/6">
                      <div className="flex flex-col ms-2 ">
                      <div className='flex justify-between mb-1'>
                        <div className='text-lg'>Name : {user.firstName} {user.lastName}</div>
                        <div className='mr-2'>DOB : {user.dateOfBirth} </div>      
                      </div>
                        <div>User Did : {user.userDid} </div>
                      </div>
                  </div>
              </div>

          </div>
      </div>



  )
}

export default RejectedRequests;
