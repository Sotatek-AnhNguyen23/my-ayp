import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest } from "redux-saga/effects";
import { dataMock, perPage } from "../../../../utils/constance";
import { GetEmployeePayload, UpdateEmpPayload } from "../home.types";
import { homeActions } from "./homeActions";
import { setEmployee, updateEmployeeById } from "./homeSlice";
function* getEmployee(
  action: PayloadAction<GetEmployeePayload>
): Generator<any> {
  try {
    const { page } = action.payload;
    if (page < 0) return;
    if (page >= dataMock.length / perPage) return;
    const dataFilter = dataMock.slice(page * perPage, (page + 1) * perPage);
    yield put(setEmployee(dataFilter));
  } catch (error) {}
}

function* updateEmployee(
  action: PayloadAction<UpdateEmpPayload>
): Generator<any> {
  try {
    yield put(updateEmployeeById(action.payload));
    action.payload.onCallbackSuccess && action.payload.onCallbackSuccess();
  } catch (error) {}
}
export function* homeSaga() {
  yield takeLatest(homeActions.GET_EMPLOYEE, getEmployee);
  yield takeLatest(homeActions.UPDATE_EMPLOYEE, updateEmployee);
}
