import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dataMock, Employee, perPage } from "../../../../utils/constance";

export interface HomeState {
  employees: Employee[];
  totalEmployee: Number;
}

const initialState: HomeState = {
  employees: dataMock,
  totalEmployee: dataMock.length,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setEmployee: (state, action: PayloadAction<any>) => {
      state.employees = action.payload;
    },
    setTotalEmployee: (state, action: PayloadAction<Number>) => {
      state.totalEmployee = action.payload;
    },
  },
});

export const { setEmployee, setTotalEmployee } = homeSlice.actions;
