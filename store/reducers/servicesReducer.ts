import {ServiceAction, ServiceActionTypes, ServiceState} from "../../types/service";

const initialState: ServiceState = {
    services: [],
    error: '',
}

export const servicesReducer = (state = initialState, action: ServiceAction): ServiceState => {
    switch (action.type) {
        case ServiceActionTypes.FETCH_SERVICE_ERROR:
            return {...state, error: action.payload}
        case ServiceActionTypes.FETCH_SERVICES:
            return {error: '', services: action.payload}
        case ServiceActionTypes.FETCH_SERVICE:
            return {...state, error: '', services: [...state.services, action.payload]}
        default:
            return state
    }
}
