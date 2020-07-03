// import {addNewPost} from './addNewPostReducer';
// import {addNewMsg} from './addNewMsgReducer';

// let store = {
//     _state: {
//         messagePage: {
//             messages:[
//                 {id: 1 ,msg: 'Hi'},
//                 {id: 2 ,msg: 'How are you doing?'},
//                 {id: 3 ,msg: 'Im good'},
//                 {id: 4 ,msg: 'and you?'},
//                 {id: 5 ,msg: 'I feel sick'}
//             ],
//             dialogs: [
//                 {id: 1, name: "Alex"},
//                 {id: 2, name: "Lina"},
//                 {id: 3, name: "Serg"},
//                 {id: 4, name: "Leva"}
//             ],
//             newMessage: ''
//         },
//         profilePage: {
//             posts: [
//                 {id: 1, post: "Hello everyone!"},
//                 {id: 2, post: "Whats upp"},
//                 {id: 3, post: "My first post"}
//             ],
//             changePost: ''
//         },
//         bestFriends: {
//             friends:[
//                 {id:1, name: 'Alex'},
//                 {id:2, name: 'Lina'},
//                 {id:3, name: 'Serg'}
//             ]
//         },
//     },
//     getState() {
//         return this._state
//     },
//     _rerender(){
//     },
//     subscribe(observer){
//         this._rerender = observer;
//     },
//     dispatch(action) {
//         this._state.messagePage = addNewMsg(this._state.messagePage, action);
//         this._state.profilePage = addNewPost(this._state.profilePage, action);
//         this._rerender();
//     }
// }

// export default store;