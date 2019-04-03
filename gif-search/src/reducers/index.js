import { combineReducers } from 'redux';
import gifReducer from './gifs';
import modalReducer from './modal';
import loginStatusReducer from './loginStatus';
import { routerReducer } from 'react-router-redux';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
    gifs: gifReducer,
    modal: modalReducer,
    login: loginStatusReducer,
    router: routerReducer,
    form: FormReducer,
});

export default rootReducer;