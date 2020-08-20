const ADD_POST = 'ADD_POST';


type PostsType = {
    id: number,
    post: string
}

const initialState = {
    posts: [
        {id: 1, post: "Hello everyone!"},
        {id: 2, post: "Whats upp"},
        {id: 3, post: "My first post"}
    ] as Array<PostsType>
}

type InitialStateType = typeof initialState

export const addNewPost = (state = initialState, action: any):InitialStateType => {
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

type AddPostType = {
    type: typeof ADD_POST,
    newPost: string
}
export const addPostActionCreater = (newPost:string):AddPostType => {
    return {
        type: ADD_POST, 
        newPost
    }
}