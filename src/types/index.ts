export type GigsState = {
    pending: boolean,
    gigs: Gigs
    error: any
}

export interface Gig {}

export type Gigs = Gig[]

export type Payload={
    gigs: Gigs,
    error: any,
}
export type fetchGigsFailurePayload = {
    error: any
}
export type fetchGigsSuccessPayload = {
   gigs: Gigs
}

export type GigsAction ={
    type: string,
    payload: Payload
}

export const GigsTypes = {
    FETCH_DATA_SUCCESS: "FETCH_DATA_SUCCESS",
    FETCH_DATA_REQUEST: "FETCH_DATA_REQUEST",
    FETCH_DATA_FAILURE: "FETCH_DATA_FAILURE"
}
