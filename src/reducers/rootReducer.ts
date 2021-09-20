import { combineReducers} from 'redux'
import GigsReducer, { updateStateReducer } from "./dataReducer"

const rootReducer = combineReducers({
    gigs: GigsReducer,
    updateTitle: updateStateReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;