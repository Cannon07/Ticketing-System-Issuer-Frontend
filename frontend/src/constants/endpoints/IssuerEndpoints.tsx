import { BaseURL } from "./BaseURL";


// GET
export const GetIssuerById = `${BaseURL}/issuers/id?id=`
export const GetIssuerByWalletId = `${BaseURL}/issuers/wallet?id=`;
export const GetPendingRequests =`${BaseURL}/issuers/pending?id=`;
export const GetRejectedRequests = `${BaseURL}/issuers/rejected?id=`;
export const GetIssuedRequests = `${BaseURL}/issuers/issued?id=`;


// POST
export const PostIssuer = `${BaseURL}/issuers/`;
export const PostLogin = `${BaseURL}/issuers/login`;
export const PostIssueVC = `${BaseURL}/issuers/issueVC`;


// PUT
export const PutRejectRequest = `${BaseURL}/issuers/reject`;

