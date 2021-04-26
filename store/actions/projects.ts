import {Dispatch} from "react";
import {ProjectAction, ProjectActionTypes} from "../../types/project";
import axios from "axios";

export const fetchProjects = () => {
    return async (dispatch: Dispatch<ProjectAction>) => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}portfolio`)
            dispatch({type: ProjectActionTypes.FETCH_PROJECTS, payload: response.data})
        } catch (e) {
            dispatch({
                type: ProjectActionTypes.FETCH_PROJECT_ERROR,
                payload: 'Произошла ошибка при загрузке проектов'})
        }
    }
}

export const fetchProject = (slug: string) => {
    return async (dispatch: Dispatch<ProjectAction>) => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}portfolio?slug=${slug}`)
            dispatch({type: ProjectActionTypes.FETCH_PROJECT, payload: response.data[0]})
        } catch (e) {
            dispatch({
                type: ProjectActionTypes.FETCH_PROJECT_ERROR,
                payload: 'Произошла ошибка при загрузке проектов'})
        }
    }
}
