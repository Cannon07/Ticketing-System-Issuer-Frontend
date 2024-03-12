"use client"

import React, { useEffect, useState, useRef } from "react";
import { useGlobalContext } from "@/app/context/globalContext";
import { useContract, useTx, useWallet } from "useink";
import { CONTRACT_ADDRESS } from '@/constants/contract_constants/ContractAddress';
import metadata from '@/constants/contract_constants/assets/TicketingSystem.json';
import { useTxNotifications } from "useink/notifications";
import { generateHash } from "@/lib/utils/hashGenerator";
import toast from "react-hot-toast";
import Link from "next/link";


interface UserData {
  id: string,
  profileImg: string,
  transactionId: string,
  userDetailsId: string,
  userEmail: string,
  walletId: string,
}

const LoginModal = () => {



  const contract = useContract(CONTRACT_ADDRESS,metadata);

  const registerUser = useTx(contract,'registerUser');
  useTxNotifications(registerUser);

  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [fullname,setFullname] = useState('');
  //const [username,setUsername] = useState('');
  const [file, setFile] = useState<File | undefined>();
  const imageRef = useRef<HTMLInputElement>(null);

  // const registerStatus = () => {
  //   if(registerUser.status === 'Finalized'){
  //     let txId = "";
  //     registerUser.result?.contractEvents?.map((value) => {
  //       txId = Object.values(value.args[1]).slice(0, 64).join("")
  //     });
  //     toast.dismiss()
  //     if (txId === "") {
  //       toast.error("Something went wrong!")
  //       //setFullname("");
  //       //setUsername("");
  //       setEmail("");
  //       setFile(undefined);
  //       disconnect();
  //     } else {
  //       toast.success('Transaction finalized!')
  //       let register_toast = toast.loading('Registering User..')
  //       uploadImage(txId);
  //       toast.dismiss(register_toast);
  //     }
  //     setConnectLoading(false)
  //   }
  //   else if(registerUser.status === 'PendingSignature'){
  //     toast.dismiss()
  //     toast.loading('Pending signature..')
  //   }
  //   else if(registerUser.status === 'Broadcast'){
  //     toast.dismiss()
  //     toast.loading('Broadcasting transaction..')
  //   }
  //   else if(registerUser.status === 'InBlock'){
  //     toast.dismiss()
  //     toast.loading('Transaction In Block..')
  //   }
  //   else{
  //     toast.dismiss()
  //   }
  // }

  useEffect(() => {
    const loginModal = document.getElementById("loginModal");
    const loginModalOverlay = document.getElementById("loginModalOverlay");
    const loginModalTriggers = document.querySelectorAll(
      "[data-register-trigger]",
    );

    loginModalTriggers.forEach((button) => {
      button.addEventListener("click", function () {
        const loginModal = document.getElementById("loginModal");
        loginModal!.classList.add("show");
      });
    });

    loginModalOverlay!.addEventListener("click", function () {
      loginModal!.classList.remove("show");
      toast.dismiss()
      // setConnectLoading(false)
      // disconnect()
    });

    // registerStatus()
  }, [registerUser.status]);

  // const saveUser = async (txId: string, imageUrl: string) => {
  //     var myHeaders = new Headers();
  //     myHeaders.append("Content-Type", "application/json");

  //     // var raw = JSON.stringify({
  //     //   "userEmail": email,
  //     //   "walletId": walletAddress,
  //     //   "userDetailsId": "",
  //     //   "transactionId": txId,
  //     //   "profileImg": imageUrl,
  //     // });

  //     console.log(raw);

  //     var requestOptions = {
  //       method: 'POST',
  //       headers: myHeaders,
  //       body: raw,
  //     };

  //     let response = await fetch(`${PostUser}`, requestOptions)
  //     if (response.ok) {
  //       let result = await response.json();
  //       console.log(result)
  //       let newUserData: UserData = {
  //         "id": result.statusMsg,
  //         "userEmail": email,
  //         "walletId": walletAddress,
  //         "userDetailsId": "",
  //         "transactionId": txId,
  //         "profileImg": imageUrl,
  //       }
  //       setUserData(newUserData);
  //       toast.success("User Registered!")
  //       //setFullname("");
  //       //setUsername("");
  //       setEmail("");
  //       setFile(undefined);
  //     }
  // }

  // const uploadImage = async (txId: string) => {
  //   if (typeof(file) === 'undefined') return;

  //   var formdata = new FormData();
  //   formdata.append("file", file);

  //   var requestOptions = {
  //     method: 'POST',
  //     body: formdata,
  //   };

  //   let response = await fetch(`${PostImage}`, requestOptions);
  //   let result = await response.text()
  //   saveUser(txId, result)
  // }

  const handleRegisterClick= async () => {
    if (email === "") toast.error("Please enter Email");
    //else if (fullname === "") toast.error("Please enter Full Name");
    //else if (username === "") toast.error("Please enter Username");
    else if (typeof(file) === 'undefined') toast.error("Please upload Profile Image");
    else {
      const hashData = generateHash([email])
      const loginModal = document.getElementById("loginModal");
      registerUser.signAndSend([hashData]);

      loginModal!.classList.remove("show");
    }
  }

  const handleRegisterNow=(e:any)=>{
    e.preventDefault()
    const loginModal = document.getElementById("loginModal");
    const registerModal = document.getElementById("registerModal");
    loginModal?.classList.remove("show");
    registerModal?.classList.add("show");
  }


  return (
    <div id="loginModal" className="search-modal">
      <div id="loginModalOverlay" className="search-modal-overlay" />
      <div className="search-wrapper">
        <div className="search-wrapper-header">
          <div className={"flex flex-col items-center gap-4 h-[425px] overflow-y-auto overflow-x-hidden no-scrollbar"}>
            <h3 className={"mb-4"}>Login</h3>
            <div className="mx-auto mb-4 w-full sm:px-4 md:px-8 lg:px-12">
            <div className="flex flex-col gap-6">
                <div className={"flex flex-col w-full"}>
                
               
                
                     
                  <div className="w-full mb-4">
                      <label htmlFor="title" className="form-label block">
                        Email
                      </label>
                      <input
                          id="Email"
                          name="Email"
                          className="form-input w-full"
                          placeholder="Enter your email"
                          type="text"
                          value={email}
                          onChange={(e)=>setEmail(e.target.value)}
                          required
                      />
                  </div>

                  <div className="w-full mb-4">
                      <label htmlFor="title" className="form-label block">
                        Password
                      </label>
                      <input
                          id="password"
                          name="password"
                          className="form-input w-full"
                          placeholder="Enter your email"
                          type="password"
                          value={password}
                          onChange={(e)=>setPassword(e.target.value)}
                          required
                      />
                  </div>
                </div>
                {/*<div className={"flex gap-6 flex-col md:flex-row w-full"}>
                  <div className="w-full">
                      <label htmlFor="title" className="form-label block">
                        Full Name
                      </label>
                      <input
                          id="full-name"
                          name="full-name"
                          className="form-input w-full"
                          placeholder="Enter your full name"
                          type="text"
                          value={fullname}
                          onChange={(e)=>setFullname(e.target.value)}
                          required
                      />
                  </div>

                  <div className="w-full">
                      <label htmlFor="date" className="form-label block">
                        Username
                      </label>
                      <input
                          id="date"
                          name="date"
                          className="form-input w-full"
                          placeholder="Enter your username"
                          type="text"
                          value={username}
                          onChange={(e)=>setUsername(e.target.value)}
                          required
                      />
                  </div>
                </div>*/}
               

               
            </div>
          </div>
          <div className="w-full sm:px-4 md:px-8 lg:px-12">
            <button onClick={handleRegisterClick} className={"btn btn-primary w-full"}>
              <h5 className={"text-white dark:text-dark flex justify-center"}>Login</h5>
            </button>
          </div>
          <div>
                <p>Not registered yet? <button
                    className=" underline font-semibold"
                    onClick={handleRegisterNow}> Register Now! </button>
                  </p>
              
            </div>
                
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;