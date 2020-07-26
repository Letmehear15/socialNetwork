const NEW_MSG = 'NEW_MSG';
const ADD_MSG = 'ADD_MSG';

const partOfState = {
    messages:[
        {id: 1 ,msg: 'Hi'},
        {id: 2 ,msg: 'How are you doing?'},
        {id: 3 ,msg: 'Im good'},
        {id: 4 ,msg: 'and you?'},
        {id: 5 ,msg: 'I feel sick'}
    ],
    dialogs: [
        {id: 1, name: "Alex"},
        {id: 2, name: "Lina"},
        {id: 3, name: "Serg"},
        {id: 4, name: "Leva"}
    ]
}

export const addNewMsg = (state = partOfState, action) => {

    switch(action.type) {
        case 'ADD_MSG': {
            let a = {
                id: 10,
                msg: action.text
            }
            let newMessage = {
                ...state,
                messages: [...state.messages]
            }
            newMessage.messages.push(a);
            return newMessage;
        }
        default:
            return state;
    }
};

export const addMsgActionCreater = (text) => {
    return {
        type: ADD_MSG, 
        text
    }
}
