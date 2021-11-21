import {takeEvery, all, put} from 'redux-saga/effects';
import {API_ACTIONS, apiActions} from './actions';
import Api from './Api';

export function* onApiLoad({payload, type}) {
   const actionType = type.replace(API_ACTIONS.FETCH_START, '').toLowerCase();
   try {
      const response = yield Api.fetch(actionType, payload);
      yield put(apiActions.fetchSuccess(actionType, response));
   } catch (e) {
      yield put(apiActions.fetchFailure(actionType, e));
   }
}


export function* watchApiLoad() {
   yield takeEvery(action => action.type.startsWith(API_ACTIONS.FETCH_START), onApiLoad);
}

export default function* apiRootSaga() {
   yield all([
      watchApiLoad()
   ]);
}