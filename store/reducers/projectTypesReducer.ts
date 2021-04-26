import {ProjectTypeAction, ProjectTypeActionTypes, ProjectTypeState} from "../../types/projectType";

const initialState: ProjectTypeState = {
    projectTypes: [],
    error: '',
    active: 0,
}

export const projectTypesReducer = (state = initialState, action: ProjectTypeAction): ProjectTypeState => {
    switch (action.type) {
        case ProjectTypeActionTypes.FETCH_PROJECTTYPE_ERROR:
            return {...state, error: action.payload}
        case ProjectTypeActionTypes.SET_PROJECTTYPE_ACTIVE:
            return {...state, active: action.payload}
        case ProjectTypeActionTypes.FETCH_PROJECTTYPES:
            return {...state, error: '', projectTypes: action.payload}
        case ProjectTypeActionTypes.FETCH_PROJECTTYPE:
            return {...state, error: '', projectTypes: [...state.projectTypes, action.payload]}
        default:
            return state
    }
}
