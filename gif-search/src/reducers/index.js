import { combineReducers } from 'redux';
import GifReducer from './gifs';
import ModalReducer from './gifs'

const rootReducer = combineReducers({
    gifs: GifReducer,
    modal: ModalReducer
});

export default rootReducer;