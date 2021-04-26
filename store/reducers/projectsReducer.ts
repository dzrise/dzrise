import {ProjectAction, ProjectActionTypes, ProjectState} from "../../types/project";

const initialState: ProjectState = {
    projects: [],
    error: '',
}

export const projectsReducer = (state = initialState, action: ProjectAction): ProjectState => {
    switch (action.type) {
        case ProjectActionTypes.FETCH_PROJECT_ERROR:
            return {...state, error: action.payload}
        case ProjectActionTypes.FETCH_PROJECTS:
            return {error: '', projects: action.payload}
        case ProjectActionTypes.FETCH_PROJECT:
            return {...state, error: '', projects: [...state.projects, action.payload]}
        default:
            return state
    }
}
