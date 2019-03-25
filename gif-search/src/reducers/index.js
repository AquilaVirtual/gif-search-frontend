import { combineReducers } from 'redux';
import GifReducer from './gifs';
import ModalReducer from './modal';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    gifs: GifReducer,
    modal: ModalReducer,
    router: routerReducer
});

export default rootReducer;