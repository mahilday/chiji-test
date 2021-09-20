import axios from 'axios'
import {all, takeLatest, call, put } from 'redux-saga/effects'
import { Gig } from '../types'
import {
    fetchGigsFailure,
    fetchGigsSuccess
} from '../actions/gigActions'
import { GigsTypes } from '../types'

const getGigs = ()=> axios.get<Gig[]>("https://jsonplaceholder.typicode.com/users");

function* fetchGigsSaga(): Generator<any, any , any >{
    try{
        const response = yield call(getGigs)
        yield put(
            fetchGigsSuccess({
                gigs: response.data,
                error: null
            })
        )
    } catch(e: any){
        yield put(
            fetchGigsFailure({
                gigs: [],
                error: e.message
            })
        )
    }
}

function* gigsSaga () {
    yield all([takeLatest(GigsTypes.FETCH_DATA_REQUEST, fetchGigsSaga)])
}

export default gigsSaga;