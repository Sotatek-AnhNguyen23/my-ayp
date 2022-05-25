import { all } from "redux-saga/effects";
import { homeSaga } from "../../handles/home/utils/data/homeSaga";

export default function* rootSaga() {
  yield all([
    homeSaga()
  ]);
}
