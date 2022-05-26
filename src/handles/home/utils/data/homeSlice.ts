import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dataMock, Employee } from "../../../../utils/constance";

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
    updateEmployeeById: (state, action: PayloadAction<any>) => {
      const data = action.payload;
      const index = state.employees.findIndex((item) => item.id === data.eId);
      state.employees[index] = {
        id: data.eId,
        name: data.params.name,
        email: data.params.email,
        isActive: data.params.isActive,
      };
    },
  },
});

export const { setEmployee, setTotalEmployee, updateEmployeeById } =
  homeSlice.actions;
