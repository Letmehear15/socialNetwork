const ADD_MSG = 'ADD_MSG';

type MessageType = {
    id: number,
    msg: string
}
type DialogsType = {
    id: number,
    name: string
}
const initialState = {
    messages:[
        {id: 1 ,msg: 'Hi'},
        {id: 2 ,msg: 'How are you doing?'},
        {id: 3 ,msg: 'Im good'},
        {id: 4 ,msg: 'and you?'},
        {id: 5 ,msg: 'I feel sick'}
    ] as Array<MessageType>,
    dialogs: [
        {id: 1, name: "Alex"},
        {id: 2, name: "Lina"},
        {id: 3, name: "Serg"},
        {id: 4, name: "Leva"}
    ] as Array<DialogsType>
}

type InitialStateType = typeof initialState

export const addNewMsg = (state = initialState, action:any):InitialStateType => {
    switch(action.type) {
        case 'ADD_MSG': {
            let a = {
                id: 10,
                msg: action.text,
            } 
            let newMessage = {
                ...state,
                messages: [...state.messages],
            }
            newMessage.messages.push(a);
            return newMessage;
        }
        default:
            return state;
    }
};


type AddMsgType = {
    type: typeof ADD_MSG,
    text: string
}
export const addMsgActionCreater = (text:string):AddMsgType => {
    return {
        type: ADD_MSG, 
        text,
    }
}
