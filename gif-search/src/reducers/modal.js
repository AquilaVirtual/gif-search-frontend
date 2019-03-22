import {OPEN_MODAL, CLOSE_MODAL } from "../actions";

const initialState = {
    clickedGif: null,
    modalIsopen: false
}

export  default function ModalReducer(state = initialState, action) {
    switch(action.type) {
        case OPEN_MODAL:
        return {
            ...state, 
            modalIsopen: true,
            clickedGif: action.gif.clickedGif
        }
        case CLOSE_MODAL:
        return {
            ...state,
            modalIsopen: false,
            clickedGif: null
        }
        default: 
        return state
    }
}