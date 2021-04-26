import {CategoryAction, CategoryActionTypes, CategoryState} from "../../types/category";

const initialState: CategoryState = {
    categories: [],
    error: '',
}

export const categoriesReducer = (state = initialState, action: CategoryAction): CategoryState => {
    switch (action.type) {
        case CategoryActionTypes.FETCH_CATEGORY_ERROR:
            return {...state, error: action.payload}
        case CategoryActionTypes.FETCH_CATEGORIES:
            return {error: '', categories: action.payload}
        case CategoryActionTypes.FETCH_CATEGORY:
            return {...state, error: '', categories: [...state.categories, action.payload]}
        default:
            return state
    }
}
