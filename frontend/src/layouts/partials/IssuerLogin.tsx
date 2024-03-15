"use client"

import { useGlobalContext } from "@/app/context/globalContext";
import { GetIssuerById, GetIssuerByWalletId } from "@/constants/endpoints/IssuerEndpoints";






export const IssuerLogin = () => {


  const {issuerData} = useGlobalContext()


  const handleLoginClick = (e: any) => {
    e.preventDefault();
    const loginModal = document.getElementById("loginModal");
    loginModal?.classList.add("show")
  }
  const handleLogoutClick = (e: any) => {
    e.preventDefault();
    // const loginModal = document.getElementById("loginModal");
    // loginModal?.classList.add("show")
  }


  return (
    <ul
      id="nav-menu"
      className="navbar-nav order-1 flex w-auto space-x-2 pb-0 xl:space-x-8"
    >

      {!issuerData ?
        <button
          onClick={handleLoginClick}
          className={`btn btn-outline-primary btn-sm lg:inline-flex items-center cursor-pointer px-8`}
        >
          Login
        </button>
        : <button
          onClick={handleLogoutClick}
          className={`btn btn-outline-primary btn-sm lg:inline-flex items-center cursor-pointer px-8`}
        >
          {issuerData?.name}
        </button>
      }

    </ul>
  )
 

}

