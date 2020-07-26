import {createStore, combineReducers, applyMiddleware} from 'redux';
import {addNewMsg} from './reducers/addNewMsgReducer';
import {addNewPost} from './reducers/addNewPostReducer';
import {userReducer} from './reducers/UsersReducer';
import {profileReducer} from './reducers/profileReducer';
import {authReducer} from './reducers/authReducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    messagePage: addNewMsg,
    profilePage: addNewPost,
    usersPage: userReducer,
    profileUser: profileReducer,
    authMe: authReducer,
    form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;

