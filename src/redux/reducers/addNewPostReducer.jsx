const ADD_POST = 'ADD_POST';

const partOfState = {
    posts: [
        {id: 1, post: "Hello everyone!"},
        {id: 2, post: "Whats upp"},
        {id: 3, post: "My first post"}
    ]
}

export const addNewPost = (state = partOfState, action) => {
    switch(action.type) {
        case 'ADD_POST': {
            let newPost = {
                id: 4,
                post: action.newPost
            }
            let newState = {
                posts: [...state.posts]
            }
            newState.posts.push(newPost);
            return newState;
        }
        default:
            return state
    } 
};

export const addPostActionCreater = (newPost) => {
    return {
        type: ADD_POST, 
        newPost
    }
}