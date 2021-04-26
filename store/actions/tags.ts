import {Dispatch} from "react";
import {TagAction, TagActionTypes} from "../../types/tag";
import axios from "axios";

export const fetchTags = () => {
    return async (dispatch: Dispatch<TagAction>) => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}tags`)
            dispatch({type: TagActionTypes.FETCH_TAGS, payload: response.data})
        } catch (e) {
            dispatch({
                type: TagActionTypes.FETCH_TAG_ERROR,
                payload: 'Произошла ошибка при загрузке тегов'})
        }
    }
}

export const fetchTag = (slug: string) => {
    return async (dispatch: Dispatch<TagAction>) => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}tag?slug=${slug}`)
            dispatch({type: TagActionTypes.FETCH_TAG, payload: response.data[0]})
        } catch (e) {
            dispatch({
                type: TagActionTypes.FETCH_TAG_ERROR,
                payload: 'Произошла ошибка при загрузке теги'})
        }
    }
}
