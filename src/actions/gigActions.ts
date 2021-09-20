import { GigsTypes, Payload } from "../types";

export const fetchGigsRequest =()=>({
 type: GigsTypes.FETCH_DATA_REQUEST
})
export const fetchGigsSuccess =(payload: Payload)=>({
  type: GigsTypes.FETCH_DATA_SUCCESS,
  payload  
})
export const fetchGigsFailure =(payload: Payload)=>({
  type:GigsTypes.FETCH_DATA_FAILURE ,
  payload
})

export const updateHeaderName =(title: string)=>({
  type:"UPDATE_HEADER_NAME",
  title
})