import { ADD_EMPLOYEE } from "../types/employees";
let emp_id = 0;
export const addEmployee = (input) => {
  return { type: ADD_EMPLOYEE, input, emp_id: emp_id++ };
};
