import { combineReducers } from 'redux';
import GifReducer from './gifs';

const rootReducer = combineReducers({
    gifs: GifReducer,
});

export default rootReducer;