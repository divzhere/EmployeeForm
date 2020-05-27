import { ADD_EMPLOYEE } from "../types/employees";

const initialState = {
  employees: [],
};

export default function EmpReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case ADD_EMPLOYEE:
      return { ...state, employees: [...state.employees, action.input] };

    default:
      return state;
  }
}
