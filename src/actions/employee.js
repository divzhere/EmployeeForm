import { ADD_EMPLOYEE } from "../types/employees";
import { DEL_EMPLOYEE } from "../types/employees";

export const addEmployee = (input) => {
  return { type: ADD_EMPLOYEE, input };
};

export const delEmployee = (index) => {
  return { type: DEL_EMPLOYEE, id: index };
};
