import {createStore, combineReducers} from 'redux';
import {addNewMsg} from './reducers/addNewMsgReducer';
import {addNewPost} from './reducers/addNewPostReducer';
import {userReducer} from './reducers/UsersReducer'

let reducers = combineReducers({
    messagePage: addNewMsg,
    profilePage: addNewPost,
    usersPage: userReducer,
    pageCount: userReducer,
});

let store = createStore(reducers);
export default store;

