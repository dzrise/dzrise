import {Dispatch} from "react";
import {PageAction, PageActionTypes} from "../../types/page";
import axios from "axios";

export const fetchHomeSettings = () => {
    return async (dispatch: Dispatch<PageAction>) => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}pages/12`)
            dispatch({type: PageActionTypes.FETCH_SETTINGS_HOME, payload:  response.data});
        } catch (e) {
            dispatch({
                type: PageActionTypes.FETCH_SETTINGS_HOME_ERROR,
                payload: 'Произошла ошибка при загрузки главной страницы'
            })
        }
    }
}
