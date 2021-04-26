import  { combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import { postsReducer } from "./postsReducer";
import { categoriesReducer } from "./categoriesReducer";
import { projectsReducer } from "./projectsReducer";
import { servicesReducer } from './servicesReducer';
import { tagsReducer } from './tagsReducer';
import { projectTypesReducer } from './projectTypesReducer';
import { commentsReducer } from './commentsReducer';
import { pagesReducer } from './pagesReducer';

const rootReducer =  combineReducers({
    posts: postsReducer,
    categories: categoriesReducer,
    projects: projectsReducer,
    services: servicesReducer,
    tags: tagsReducer,
    projectTypes: projectTypesReducer,
    comments:  commentsReducer,
    pages: pagesReducer,
})

export const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        }
        if (state.count) nextState.count = state.count
        return nextState
    } else {
        return rootReducer(state, action)
    }
}

export type RootState = ReturnType<typeof rootReducer>
