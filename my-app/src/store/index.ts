import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import ClassInfoStore from "./ClassInfoRedux";
import ClassInfoSaga from "./ClassInfoSaga";

const rootReducer = combineReducers({ ClassInfoStore });

export function* rootSaga() {
    yield all([ClassInfoSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

export default rootReducer;
