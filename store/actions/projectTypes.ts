import {Dispatch} from "react";
import {ProjectTypeAction, ProjectTypeActionTypes} from "../../types/projectType";
import axios from "axios";

export const fetchProjectTypes = () => {
    return async (dispatch: Dispatch<ProjectTypeAction>) => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}portfoliotype`)
            dispatch({type: ProjectTypeActionTypes.FETCH_PROJECTTYPES, payload: response.data})
        } catch (e) {
            dispatch({
                type: ProjectTypeActionTypes.FETCH_PROJECTTYPE_ERROR,
                payload: 'Произошла ошибка при загрузке типов проекта'})
        }
    }
}

export const fetchProjectType = (slug: string) => {
    return async (dispatch: Dispatch<ProjectTypeAction>) => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}portfoliotype?slug=${slug}`)
            dispatch({type: ProjectTypeActionTypes.FETCH_PROJECTTYPE, payload: response.data[0]})
        } catch (e) {
            dispatch({
                type: ProjectTypeActionTypes.FETCH_PROJECTTYPE_ERROR,
                payload: 'Произошла ошибка при загрузке типа проекта'})
        }
    }
}

export const setProjecttypeActive = (id: string) => {
    return {
        type: ProjectTypeActionTypes.SET_PROJECTTYPE_ACTIVE,
        payload: id
    }
}
