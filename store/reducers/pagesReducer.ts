import {PageAction, PageActionTypes, PageState } from "../../types/page";

const initialState: PageState = {
    home: {},
    errors: {
        home: '',
    }
}

export const pagesReducer = (state = initialState, action: PageAction): PageState => {
    switch (action.type) {
        case PageActionTypes.FETCH_SETTINGS_HOME:
            return {...state, home:  { ...state.home, ...action.payload.acf, head_tags: action.payload.head_tags}}
        case PageActionTypes.FETCH_SETTINGS_HOME_ERROR:
            return {...state, errors: state.errors.home = action.payload}
        default:
            return state
    }
}
