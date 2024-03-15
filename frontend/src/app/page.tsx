"use client"

import IssuerProfile from "@/layouts/profiles/IssuerProfile";
import { useGlobalContext } from "./context/globalContext";
import NotRegistered from "./not-registered";
import { GetIssuerById } from "@/constants/endpoints/IssuerEndpoints";
import toast from "react-hot-toast";
import { useEffect } from "react";


interface Data {
  id: string;
  expiresAt: number;
}

interface IssuerData {
  id: string,
  name: string,
  email: string,
  govId: string,
  type: string,
  publicDid: string,
  walletId: string,
}

const Home = () => {

  const { issuerData, setIssuerData } = useGlobalContext()

  const getData = (issuerId: string): string | null => {
    const dataString: string | null = localStorage.getItem(issuerId);
    if (!dataString) return null; // No data found

    const data: Data = JSON.parse(dataString);
    if (data.expiresAt < new Date().getTime()) {

        localStorage.removeItem(issuerId);
        return null;
    }

    return data.id;
}


useEffect(()=>{
  getIssuerById();
},[])

const getIssuerById = async() =>{

  toast.loading('Please wait..')

  try{
    const id: string | null = getData('IssuerId');
    console.log("yeh hain id: ",id)
    if (id === null) {
      throw new Error("ID is null");
    }
    const response = await fetch(`${GetIssuerById}${id}`)

    if (response.ok) {
      let result = await response.json();
      console.log(result)
      let newIssuerData: IssuerData = {
        id: result.id,
        name: result.name,
        email: result.email,
        govId: result.govId,
        type: result.type,
        publicDid: result.publicDid,
        walletId: result.walletId,
      }
      setIssuerData(newIssuerData);
      toast.dismiss()
      toast.success(`Issuer fetched successfully!`)
    

    }
    else {
      toast.dismiss()
      toast.error('Failed to fetch issuer')
      console.log(response)
    }

  }
  catch(error){
    toast.dismiss();
  }

}

  return (
    <>
      {issuerData ?
        <div>
          <IssuerProfile />
        </div>: <NotRegistered />
        } 

    </>
  );
};

export default Home;




