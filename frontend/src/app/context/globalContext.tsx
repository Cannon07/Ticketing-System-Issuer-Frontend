"use client"

import { createContext, useContext, Dispatch, SetStateAction,useState, ReactNode } from "react";


interface IssuerData {
  id: string,
  name: string,
  email: string,
  govId: string,
  type: string,
  publicDid: string,
  walletId: string,
}

interface ContextProps{
    connectLoading: boolean,
    setConnectLoading: Dispatch<SetStateAction<boolean>>,
    issuerData: IssuerData | null,
    setIssuerData: Dispatch<SetStateAction<IssuerData | null>>,
    walletAddress: string,
    setWalletAddress: Dispatch<SetStateAction<string>>
}

const GlobalContext = createContext<ContextProps>({
    connectLoading: false,
    setConnectLoading: (): boolean=>false,
    issuerData: null,
    setIssuerData: (): IssuerData | null => null,
    walletAddress: '',
    setWalletAddress: (): string=>'',
})

interface GlobalContextProviderProps{
    children: ReactNode;
}

export const GlobalContextProvider = ({children}:GlobalContextProviderProps)=>{
    
    const [connectLoading, setConnectLoading] = useState(false);
    const [issuerData, setIssuerData] = useState<IssuerData | null>(null);
    const [walletAddress, setWalletAddress] = useState('');

    return (
        <GlobalContext.Provider value = {{connectLoading,setConnectLoading,issuerData,setIssuerData,walletAddress,setWalletAddress}}>

            {children}

        </GlobalContext.Provider>
    )
 }

 export const useGlobalContext = () => useContext(GlobalContext);