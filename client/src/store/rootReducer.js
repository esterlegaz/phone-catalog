import { combineReducers } from 'redux';
import globalReducer from './global/globalReducer';

const rootReducer = combineReducers({
    global: globalReducer
});

export default rootReducer;
