import {OPEN_MODAL, CLOSE_MODAL } from "../actions";

const initialState = {
    clickedGif: null,
    modalIsOpen: false
}
export  default function modalReducer(state = initialState, action) {
    console.log("State in Modal reducer", state)
    switch(action.type) {
        case OPEN_MODAL:
        return {
            ...state, 
            modalIsOpen: true,
            clickedGif: action.gif.clickedGif
        }
        case CLOSE_MODAL:
        return {
            ...state,
            modalIsOpen: false,
            clickedGif: null
        }
        default: 
        return state
    }
}