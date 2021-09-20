import { GigsTypes, GigsAction, GigsState } from "../types";

const initialState: GigsState = {
    pending: false,
    gigs: [],
    error: null,
} 

const stateTree = {
    title: "Dashboard",
}

export const updateStateReducer = (state = stateTree, action: any) =>{
    switch (action.type){
        case "UPDATE_HEADER_NAME":
            return {
                ...state,
                title: action.title
            };
        default:
            return{
                ...state
            }
    }
}

const GigsReducer = (state = initialState, action: GigsAction)=>{
    switch( action.type) {
        case GigsTypes.FETCH_DATA_REQUEST:
            return {
                ...state,
                pending: true,
            };
        case GigsTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                pending: false,
                gigs: action.payload.gigs,
                error: null
            };
        case GigsTypes.FETCH_DATA_FAILURE:
            return {
                ...state,
                pending: false,
                gigs: [],
                error: action.payload.error
            };
        default: 
            return{
                ...state
            }
    }
};
export default  GigsReducer