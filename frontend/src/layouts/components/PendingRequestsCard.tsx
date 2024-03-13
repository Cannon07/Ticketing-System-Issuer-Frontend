import { useRouter } from "next/navigation";
import PendingCardModal from "./PendingCardModal";
import { MdRemoveRedEye } from "react-icons/md";





const PendingRequestsCard = () => {


    const router = useRouter();


    //     "userDid": "string",
    //   "firstName": "string",
    //   "lastName": "string",
    //   "address": "string",
    //   "dateOfBirth": "string",
    //   "gender": "string",
    //   "placeOfBirth": "string",
    //   "proofId": "string",
    //   "docType": "string",




    const user = {
        userDid: "did:ethr:77da159a09fc210f268ce9e3be5b02e0a9c879a6",
        firstName: "Nikhil",
        lastName: "Magar",
        address: "Gaothan, Shivajinagar, Pune",
        dateOfBirth: "25/10/2001",
        gender: "Male",
        placeOfBirth: "Pune",
        proofId: "https://firebasestorage.googleapis.com/v0/b/concert-ticketing-system-67922.appspot.com/o/fdd3da7f-72a3-4792-b291-150fef559f4f.png?alt=media",
        docType: "Passport",
    };


    const handleCardClick = () => {
        const pendingCardModal = document.getElementById("pendingCardModal");
        pendingCardModal?.classList.add("show");
    }


    return (
        <>
            <PendingCardModal user={user} />
            <div className="pl-3 pb-3">
                <div onClick={handleCardClick} className="rounded-lg bg-white dark:bg-darkmode-theme-light p-8 shadow-md hover:shadow-lg dark:hover:bg-gray-700 hover:bg-gray-200 relative h-full w-auto cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1">
                    {/* <div> */}
                    <div className="flex justify-between">
                        <h3 className="text-xl font-bold">Nikhil Magar</h3>
                        <MdRemoveRedEye size={'24px'}/>
                    </div>

                        <div className="py-3">
                                <hr className="h-px w-full dark:bg-gray-600 border-0 bg-gray-200" />
                            </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><span className="font-semibold">Decentralized Identifier:</span> did:ethr:77da159a09fc210f268ce9e3be5b02e0a9c879a6</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300"><span className="font-semibold">Address:</span> Gaothan, Shivajinagar, Pune</p>
                    {/* </div> */}
                    {/* <div>
                       
                    </div> */}
                      
                </div>
             
                
            </div>


        </>
    )
}


export default PendingRequestsCard;