import { combineReducers } from 'redux';
import GifReducer from './gifs';
import ModalReducer from './modal.js'

const rootReducer = combineReducers({
    gifs: GifReducer,
    modal: ModalReducer
});

export default rootReducer;