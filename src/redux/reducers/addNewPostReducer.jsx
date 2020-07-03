const ADD_POST = 'ADD_POST';
const NEW_POST = 'NEW_POST';

const partOfState = {
    posts: [
        {id: 1, post: "Hello everyone!"},
        {id: 2, post: "Whats upp"},
        {id: 3, post: "My first post"}
    ],
    changePost: ''
}

export const addNewPost = (state = partOfState, action) => {
    switch(action.type) {
        case 'ADD_POST': 
            {let newPost = {
                id: 4,
                post: state.changePost
            }
            let newState = {
                posts: [...state.posts]
            }
            newState.posts.push(newPost);
            return newState;}

        case 'NEW_POST': 
            let newPost = {posts:[...state.posts]} ;
            newPost.changePost = action.text;
            return newPost
        default:
            return state
    } 
};

export const addPostActionCreater = () => {
    return {type: ADD_POST}
}
export const addNewPostActionCreater = (text) => {
    return {type: NEW_POST, text}
}