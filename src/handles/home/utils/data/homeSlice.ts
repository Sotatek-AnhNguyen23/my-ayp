import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dataMock, Employee } from "../../../../utils/constance";

export interface HomeState {
  employees: Employee[];
}

const initialState: HomeState = {
  employees: dataMock,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setEmployee: (state, action: PayloadAction<any>) => {
      state.employees = action.payload;
    },
  },
});
