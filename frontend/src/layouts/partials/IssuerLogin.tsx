import React from "react";


export const IssuerLogin = () => {



  const loggedIn = false;


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

      {!loggedIn ?
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
          Nikhil Magar
        </button>
      }

    </ul>
  )
 

}

