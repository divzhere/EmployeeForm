import { ADD_EMPLOYEE } from "../types/employees";
import { DEL_EMPLOYEE } from "../types/employees";

const initialState = {
  employees: [
    {
      name: "Divyum",
      id: "353058781520680",
      department: "HR",
      email: "divz7777@gmail.com",
      doj: "2020-05-03",
      index: 1,
    },
    {
      name: "heyy",
      id: "550264998751686",
      department: "Sales",
      email: "divz7777@gmail.com",
      doj: "2020-05-10",
      index: 2,
    },
  ],
};

export default function EmpReducer(state = initialState, action) {
  const { type, id } = action;
  switch (type) {
    case ADD_EMPLOYEE:
      return { ...state, employees: [...state.employees, action.input] };
    case DEL_EMPLOYEE:
      let emps = state.employees.filter((i) => i.index !== id);
      return {
        employees: emps,
      };
    default:
      return state;
  }
}
