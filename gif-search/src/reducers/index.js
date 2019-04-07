import { combineReducers } from "redux";
import gifReducer from "./gifs";
import modalReducer from "./modal";
import loginStatusReducer from "./loginStatus";
import signupReducer from "./signup";
import loginreducer from "./login";
import { routerReducer } from "react-router-redux";
import { reducer as FormReducer } from "redux-form";

const rootReducer = combineReducers({
  gifs: gifReducer,
  modal: modalReducer,
  loginStatus: loginStatusReducer,
  login: loginreducer,
  signup: signupReducer,
  router: routerReducer,
  form: FormReducer
});

export default rootReducer;
