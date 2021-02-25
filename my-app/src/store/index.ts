import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import ClassInfoStore from "./ClassInfoStore";
import ClassInfoSaga from "./ClassInfoSaga";

const rootReducer = combineReducers({ ClassInfoStore });

export function* rootSaga() {
    yield all([ClassInfoSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
