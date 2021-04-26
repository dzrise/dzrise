import {TagAction, TagActionTypes, TagState} from "../../types/tag";

const initialState: TagState = {
    tags: [],
    error: '',
}

export const tagsReducer = (state = initialState, action: TagAction): TagState => {
    switch (action.type) {
        case TagActionTypes.FETCH_TAG_ERROR:
            return {...state, error: action.payload}
        case TagActionTypes.FETCH_TAGS:
            return {error: '', tags: action.payload}
        case TagActionTypes.FETCH_TAG:
            return {...state, error: '', tags: [...state.tags, action.payload]}
        default:
            return state
    }
}
