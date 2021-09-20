import { all, fork } from 'redux-saga/effects'
import gigsSaga from './gigsSaga'

export function* rootSaga(){
    yield all([fork(gigsSaga)])
}