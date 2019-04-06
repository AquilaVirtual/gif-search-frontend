import { SIGN_UP } from "../constants/constants";

const initialState = {
    name: null,
    email: null,
    password: null
}
export  default function signupReducer(state = initialState, action) {
    switch(action.type) {
     case SIGN_UP:
     return {
         ...state, user: action.payload.user
     }
     default:
     return state;
    }
}