import request from 'superagent';
//No need to hide API key; this is a public key
const API_URL = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = '&api_key=dc6zaTOxFJmzC';

export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const  SEARCH_GIFS = "SEARCH_GIFS";
export const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
export const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
export const LOGIN = 'LOGIN';

export function searchGifs(searchTerm = null) {
    console.log("Searched term", searchTerm)
    const data = request.get(`${API_URL}${searchTerm.replace(/\s/g, '+')}${API_KEY}`);
    console.log("Getting data", data)         
    return {
      type: SEARCH_GIFS,
      payload: data
    }
}

export function openModal(gif) {
  console.log("Clicked Gif in Modal action", gif)
  return {
    type: OPEN_MODAL,
    gif
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}
export function setLoginPending(isLoginPending) {
  return {
    type: SET_LOGIN_PENDING,
    isLoginPending
  };
}

export function setLoginSuccess(isLoginSuccess) {
  return {
    type: SET_LOGIN_SUCCESS,
    isLoginSuccess
  };
}

export function setLoginError(loginError) {
  return {
    type: SET_LOGIN_ERROR,
    loginError
  }
}

function callLoginApi(email, password, callback) {
  setTimeout(() => {
    if (email === 'admin@example.com' && password === 'admin') {
      return callback(null);
    } else {
      return callback(new Error('Invalid email and password'));
    }
  }, 1000);
}

export function signup(name, email, password) {
  console.log("Sign up called")
}
export function login(email, password) {
  console.log("We are getting something:", email, password)
  // return dispatch => {
  //   dispatch(setLoginPending(true));
  //   dispatch(setLoginSuccess(false));
  //   dispatch(setLoginError(null));
  //  //
  //   callLoginApi(email, password, error => {
  //     dispatch(setLoginPending(false));
  //     if (!error) {
  //       dispatch(setLoginSuccess(true));
  //     } else {
  //       dispatch(setLoginError(error));
  //     }
  //   });
  // }
}