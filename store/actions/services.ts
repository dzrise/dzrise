import {Dispatch} from "react";
import {ServiceAction, ServiceActionTypes} from "../../types/service";
import axios from "axios";

export const fetchServices = () => {
    return async (dispatch: Dispatch<ServiceAction>) => {
        try {
            console.log(`${process.env.NEXT_PUBLIC_API_HOST}services`)
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}service`)
            dispatch({type: ServiceActionTypes.FETCH_SERVICES, payload: response.data})
        } catch (e) {
            dispatch({
                type: ServiceActionTypes.FETCH_SERVICE_ERROR,
                payload: 'Произошла ошибка при загрузке услуг'})
        }
    }
}

export const fetchService = (slug: string) => {
    return async (dispatch: Dispatch<ServiceAction>) => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}service?slug=${slug}`)
            dispatch({type: ServiceActionTypes.FETCH_SERVICE, payload: response.data[0]})
        } catch (e) {
            dispatch({
                type: ServiceActionTypes.FETCH_SERVICE_ERROR,
                payload: 'Произошла ошибка при загрузке услуги'})
        }
    }
}
