import { combineReducers } from 'redux';
import GifReducer from './gifs';
import ModalReducer from './modal';
import { routerReducer } from 'react-router-redux';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
    gifs: GifReducer,
    modal: ModalReducer,
    router: routerReducer,
    form: FormReducer,
});

export default rootReducer;