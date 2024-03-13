"use client"

import React, { useEffect, useState, useRef } from "react";
import { useGlobalContext } from "@/app/context/globalContext";
import { useContract, useTx, useWallet } from "useink";
import { CONTRACT_ADDRESS } from '@/constants/contract_constants/ContractAddress';
import metadata from '@/constants/contract_constants/assets/TicketingSystem.json';
import { useTxNotifications } from "useink/notifications";
import { generateHash } from "@/lib/utils/hashGenerator";
import toast from "react-hot-toast";
import { ConnectWallet } from "../web3/ConnectWallet";


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


const PendingCardModal: React.FC<UserCardProps> = ({ user }) => {



    const contract = useContract(CONTRACT_ADDRESS, metadata);

    const { account } = useWallet()

    const registerUser = useTx(contract, 'registerUser');
    useTxNotifications(registerUser);




    useEffect(() => {
        const pendingCardModal = document.getElementById("pendingCardModal");
        const pendingCardModalOverlay = document.getElementById("pendingCardModalOverlay");
        const pendingCardModalTriggers = document.querySelectorAll(
            "[data-register-trigger]",
        );

        pendingCardModalTriggers.forEach((button) => {
            button.addEventListener("click", function () {
                const pendingCardModal = document.getElementById("pendingCardModal");
                pendingCardModal!.classList.add("show");
            });
        });

        pendingCardModalOverlay!.addEventListener("click", function () {
            pendingCardModal!.classList.remove("show");
            toast.dismiss()
            // setConnectLoading(false)
            // disconnect()
        });

        // registerStatus()
    }, [registerUser.status]);

    function truncateString(str: string, maxLength: number) {
        return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
    }

    


    return (
        <div id="pendingCardModal" className="search-modal">
            <div id="pendingCardModalOverlay" className="search-modal-overlay" />
            <div className="search-wrapper">
                <div className="search-wrapper-header">
                    <div className={"flex flex-col items-center gap-4 h-96 overflow-scroll overflow-x-hidden no-scrollbar p-8"}>


                        <div className="shadow rounded-lg border w-full">
                            <div className="px-4 py-5 sm:px-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    User Details
                                </h3>
                                <p className="mt-1 max-w-2xl text-sm">
                                This contains details regarding the user
                                </p>
                            </div>
                            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                                <dl className="sm:divide-y sm:divide-gray-200">
                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium">
                                            Full name
                                        </dt>
                                        <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                                            {user.firstName} {user.lastName}
                                        </dd>
                                    </div>
                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium">
                                            User DID
                                        </dt>
                                        <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2 flex flex-wrap">
                                            {truncateString(user.userDid, 35)}

                                        </dd>
                                    </div>
                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium">
                                            Address
                                        </dt>
                                        <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                                            {truncateString(user.address, 35)}
                                        </dd>
                                    </div>
                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium">
                                            Date of Birth
                                        </dt>
                                        <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                                            {user.dateOfBirth}
                                        </dd>
                                    </div>
                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium">
                                            Gender
                                        </dt>
                                        <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                                            {user.gender}
                                        </dd>
                                    </div>
                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium">
                                            Date of Birth
                                        </dt>
                                        <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                                            {user.dateOfBirth}
                                        </dd>
                                    </div>
                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium">
                                            Place of Birth
                                        </dt>
                                        <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                                            {user.placeOfBirth}
                                        </dd>
                                    </div>

                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium">
                                            Document Type
                                        </dt>
                                        <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                                            {user.docType}
                                        </dd>
                                    </div>

                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium">
                                            Proof Document
                                        </dt>
                                        <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                                            <a href={`${user.proofId}`} target="_blank" rel="noopener noreferrer" className="underline hover:dark:text-white hover:text-black">View Document</a>

                                        </dd>
                                    </div>
                                </dl>
                            </div>



                        </div>


                        <div className="pl-2 flex gap-4 self-start">
                            <button className={"btn-sm btn-primary"}>
                                <span className={"text-white dark:text-dark flex justify-center"}>Issue VC</span>
                            </button>
                            <button className={"btn-sm btn-primary"}>
                                <span className={"text-white dark:text-dark flex justify-center"}>Reject Request</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PendingCardModal;