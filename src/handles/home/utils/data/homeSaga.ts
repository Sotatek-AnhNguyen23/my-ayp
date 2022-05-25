import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest } from "redux-saga/effects";
import { dataMock, perPage } from "../../../../utils/constance";
import { homeActions } from "./homeActions";
import { setEmployee } from "./homeSlice";
function* getEmployee(action: PayloadAction<any>): Generator<any> {
  try {
    const { page } = action.payload;
    if (page < 0) return;
    if (page >= dataMock.length / perPage ) return;
    const dataFilter = dataMock.slice(page * perPage, (page + 1) * perPage);
    yield put(setEmployee(dataFilter));
  } catch (error) {}
}
export function* homeSaga() {
  yield takeLatest(homeActions.GET_EMPLOYEE, getEmployee);
}
