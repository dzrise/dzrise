import {PostAction, PostActionTypes, PostState} from "../../types/post";

const initialState: PostState = {
    posts: [],
    error: null,
}

export const postsReducer = (state = initialState, action: PostAction): PostState => {
    switch (action.type) {
        case PostActionTypes.FETCH_POSTS_ERROR:
            return {...state, error: action.payload}
        case PostActionTypes.FETCH_POSTS:
            return {error: '', posts: action.payload}
        default:
            return state
    }
}
