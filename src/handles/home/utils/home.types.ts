export interface UpdateEmployeeInput {
  name?: string;
  email?: string;
  isActive?: boolean;
}

export interface GetEmployeePayload {
  page: number;
}

export interface UpdateEmpPayload {
  params: UpdateEmployeeInput;
  eId: number;
  onCallbackSuccess?: any;
}
