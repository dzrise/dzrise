import {CommentAction, CommentActionTypes, CommentState} from "../../types/comment";

const initialState: CommentState = {
    comments: [],
    error: '',
    parent: null,
}

export const commentsReducer = (state = initialState, action: CommentAction): CommentState => {
    switch (action.type) {
        case CommentActionTypes.FETCH_COMMENTS_ERROR:
            return {...state, error: action.payload}
        case CommentActionTypes.FETCH_COMMENTS:
            return {...state, error: '', comments: action.payload}
        case CommentActionTypes.FETCH_COMMENT:
            return {...state, comments: state.comments.concat(action.payload), error: '', parent: null}
        case CommentActionTypes.SET_PARENT:
            return {...state, parent: action.payload}
        default:
            return state
    }
}
