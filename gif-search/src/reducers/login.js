import { LOGIN } from "../constants/constants";

const initialState = {
  email: null,
  password: null
};
export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload.user
      };
    default:
      return state;
  }
}
