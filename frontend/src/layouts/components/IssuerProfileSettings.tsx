"use client"

import React, { useEffect, useState, useRef } from 'react';
import { generateHash } from '@/lib/utils/hashGenerator';
import { useContract, useTx } from 'useink';
import { CONTRACT_ADDRESS } from '@/constants/contract_constants/ContractAddress';
import metadata from '@/constants/contract_constants/assets/TicketingSystem.json';
import { useTxNotifications } from 'useink/notifications';
import toast from 'react-hot-toast';
import { PostImage } from '@/constants/endpoints/ImageEndpoints';
import { UpdateOrganizerById } from '@/constants/endpoints/OrganizerEndpoints';

// interface OrganizerDataProps {
//     id: string,
//     name: string,
//     email: string,
//     govId: string,
//     walletId: string,
//     transactionId: string,
//     organisedEvents: string[]
//     profileImg: string,
//   }


interface organizerDataI {
    id: string | undefined,
    name: string | undefined,
    email: string | undefined,
    govId: string | undefined,
    type: string | undefined,

}

const IssuerProfileSettings: React.FC<organizerDataI> = ({ id, name, email, govId, type }) => {

  




    const [isEditing, setIsEditing] = useState(false);

    const [issuerName, setissuerName] = useState(name);
    const [issuerEmail, setissuerEmail] = useState(email);
    const [identity, setIdentity] = useState<string | undefined>(govId);
    const [iType, setIType] = useState(type)
    

   
    const [originalName, setOriginalName] = useState(name);
    const [originalEmail, setOriginalEmail] = useState(email);
    const [originalIdentity, setOriginalIdentity] = useState<string | undefined>(govId);
    const [orginalIType,setOriginalItype] = useState(type)





    //   const putOrganizer = async (txId: string, imageUrl: string | undefined) => {
    //     toast.loading('Updating organizer..')
    //     var myHeaders = new Headers();
    //     myHeaders.append("Content-Type", "application/json");

    //     var raw = JSON.stringify({
    //       "name": issuerName,
    //       "email": issuerEmail,
    //       "govId": identity,
    //       "walletId": walletId,
    //       "transactionId": txId,
    //       "profileImg": imageUrl,
    //     });

    //     console.log(raw);

    //     var requestOptions = {
    //       method: 'PUT',
    //       headers: myHeaders,
    //       body: raw,
    //     };

    //     let response = await fetch(`${UpdateOrganizerById}${id}`, requestOptions)
    //     if (response.ok) {
    //       let result = await response.json();
    //       setTransId(txId);
    //       console.log(result)
    //       toast.dismiss()
    //       toast.success("Organizer Updated!")
    //       setLoading(false)
    //       const orgData = {
    //             id: id ? id.toString() : "",
    //             name: issuerName ? issuerName.toString() : "",
    //             email: issuerEmail ? issuerEmail.toString() : "",
    //             govId: identity ? identity.toString() : "",
    //             walletId: walletId ? walletId.toString() : "",
    //             transactionId: txId ? txId.toString() : "",
    //             organisedEvents:  Array.isArray(organizedEvents) ? organizedEvents : (organizedEvents ? [organizedEvents] : []),
    //             profileImg: imageUrl ? imageUrl.toString() : "",
    //         };

    //       setOrganizerData(orgData);

    //     }
    // }

    const handleEditClick = () => {
        setIsEditing(true);
        setOriginalName(name);
        setOriginalEmail(email);
        setOriginalIdentity(govId);
        setOriginalItype(type);
  
    };

    const handleSaveChanges = (e: any) => {
        e.preventDefault();
        if (issuerName === "") toast.error("Name cannot be empty!");
        else if (issuerEmail === "") toast.error("Email cannot be empty!");
        else if (identity==="") toast.error("Adhar number cannot be empty!");
        else if(identity && identity.length<12) toast.error("Adhar number must be of 12 digits")
        else if(type){
           setIsEditing(false)
        }
    };

    const handleCancelEdit = () => {
        setissuerName(originalName);
        setissuerEmail(originalEmail);
        setIdentity(originalIdentity)
        setIType(orginalIType);
        setIsEditing(false);

    };

    return (
        <div className="h-full w-full pl-3">
            <div className="bg-theme-light dark:bg-darkmode-theme-light overflow-hidden shadow rounded-lg h-full w-full flex items-center justify-center">
                <div className="p-8 rounded shadow-md w-full">
                    <h1 className="text-2xl font-semibold mb-4 text-center">Profile Settings</h1>
                    <div>
                        {!isEditing &&

                            <div className="py-4">
                                <hr className="h-px w-full dark:bg-gray-600 border-0 bg-gray-200" />
                            </div>}

                        <div className={`mb-4 ${isEditing ? '' : 'flex justify-between'}`}>
                            <label htmlFor="name" className="form-label-profile">
                                Full Name
                            </label>
                            {isEditing ? (
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={issuerName}
                                    onChange={(e) => setissuerName(e.target.value)}
                                    className="form-input-profile"
                                />
                            ) : (
                                <div>{issuerName}</div>
                            )}
                        </div>


                        <div className={`mb-4 ${isEditing ? '' : 'flex justify-between'}`}>
                            <label htmlFor="email" className="form-label-profile">
                                Email
                            </label>
                            {isEditing ? (
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={issuerEmail}
                                    onChange={(e) => setissuerEmail(e.target.value)}
                                    className="form-input-profile"
                                />
                            ) : (
                                <div>{issuerEmail}</div>
                            )}
                        </div>

                        <div className={`mb-4 ${isEditing ? '' : 'flex justify-between'}`}>
                            <label htmlFor="email" className="form-label-profile">
                                Adhar Number
                            </label>
                            {isEditing ? (
                                <input
                                    type="text"
                                    id="identity"
                                    name="identity"
                                    value={identity}
                                    onChange={(e) => setIdentity(e.target.value)}
                                    className="form-input-profile"
                                />
                            ) : (
                                <div>{identity}</div>
                            )}
                        </div>

                        <div className={`mb-4 ${isEditing ? '' : 'flex justify-between'}`}>
                            <label htmlFor="email" className="form-label-profile">
                                Issuer type
                            </label>
                            {isEditing ? (
                                <input
                                    type="text"
                                    id="type"
                                    name="type"
                                    value={iType}
                                    onChange={(e) => setIType(e.target.value)}
                                    className="form-input-profile"
                                />
                            ) : (
                                <div>{iType}</div>
                            )}
                        </div>

                       
                    </div>




                    <div className="flex justify-start mt-6">

                        {isEditing ? (
                            <>
                                <button
                                    onClick={handleSaveChanges}
                                    className="mr-2 btn-sm btn-primary"
                                >
                                    Save Changes
                                </button>
                                <button
                                    onClick={handleCancelEdit}
                                    className="btn-sm btn-primary"
                                >
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={handleEditClick}
                                className="btn-sm btn-primary"
                            >
                                Edit
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IssuerProfileSettings;


