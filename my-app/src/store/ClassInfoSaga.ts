import { fork, call, put, takeLatest, all } from "redux-saga/effects";
import {
    RequestClassInfoData,
    RequestClassInfoSuccess,
    RequestClassInfoFail,
} from "./ClassInfoRedux";
import { ClassInfoParser } from "../Api/dataParser";

const ClassInfoRequestApi = () => {
    return ClassInfoParser();
};

function* ClassInfoRequestFunc() {
    try {
        const response = yield call(ClassInfoRequestApi);

        if (response.success) {
            console.log(response.result);
            RequestClassInfoSuccess(response.result);
        } else {
            yield put(RequestClassInfoFail());
        }
    } catch (e) {
        alert(e);
        yield put(RequestClassInfoFail());
    }
}

function* watchClassInfoSaga() {
    yield takeLatest(RequestClassInfoData, ClassInfoSaga);
}

export default function* ClassInfoSaga(): Generator {
    yield all([fork(watchClassInfoSaga)]);
}
