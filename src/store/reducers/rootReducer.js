import { combineReducers } from 'redux';
import { userInfo } from '@reducers/userReducer';

const rootReducer = combineReducers({
    userInfo,
});

export default rootReducer;
