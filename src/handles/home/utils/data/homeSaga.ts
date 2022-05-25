import { PayloadAction } from "@reduxjs/toolkit";
import { takeLatest } from "redux-saga/effects";
import { homeActions } from "./homeActions";

function* getEmployee(action: PayloadAction<any>): Generator<any> {
  try {
    console.log("hello ma");
  } catch (error) {}
}
export function* homeSaga() {
  yield takeLatest(homeActions.GET_EMPLOYEE, getEmployee);
}
