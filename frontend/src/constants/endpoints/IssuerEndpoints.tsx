import { BaseURL } from "./BaseURL";


// GET
export const GetIssuerByWalletId = `${BaseURL}/issuers/wallet?id=`;
export const GetPendingRequests =`${BaseURL}/issuers/pending?id=`;


// POST
export const PostIssuer = `${BaseURL}/issuers/`;
export const PostLogin = `${BaseURL}/issuers/login`;


// export const PostOrganizerEvent = `${BaseURL}/organisers/addEvent?id=`;


// //PUT
// export const UpdateOrganizerById = `${BaseURL}/organisers/update/id?id=`;

