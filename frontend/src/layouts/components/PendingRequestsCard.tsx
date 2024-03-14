import { useRouter } from "next/navigation";
import { MdRemoveRedEye } from "react-icons/md";
import { GetPendingRequests } from "@/constants/endpoints/IssuerEndpoints";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import PendingContent from "./pendingContent";


interface UserProps {
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

const PendingRequestsCard = () => {
    const router = useRouter();
    const [users, setUsers] = useState<UserProps[]>([]);
    const [selectedUser, setSelectedUser] = useState<UserProps | null>(null);

    useEffect(() => {
        fetchUserDetails();
    }, []);

    const fetchUserDetails = async () => {
        toast.dismiss()
        toast.loading('Fetching pending requests')

        try {
            const res = await fetch(`${GetPendingRequests}392116768483573825`);
            const result = await res.json();

            if (res.ok) {
                const userData: UserProps[] = result.map((data: any) => ({
                    userDid: data.userDid,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    address: data.address,
                    dateOfBirth: data.dateOfBirth,
                    gender: data.gender,
                    placeOfBirth: data.placeOfBirth,
                    proofId: data.proofId,
                    docType: data.docType,
                }));

                setUsers(userData);
                toast.dismiss();
                toast.success('Pending requests fetched successfully!');
            } else {
                console.error("Error loading venues");
                toast.dismiss();
                toast.error('Failed fetching pending requests');
            }
        } catch (error) {
            console.error("Error loading venues", error);
            toast.dismiss();
            toast.error('Failed fetching pending requests');
        }
    };




    return (
        <>
            {users.map((user) => (
                <div key={user.userDid}>
                    <PendingContent user={user} />
                </div>

            ))}


        </>
    );
};

export default PendingRequestsCard;
