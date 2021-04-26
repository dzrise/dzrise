import {Dispatch} from "react";
import {CategoryAction, CategoryActionTypes} from "../../types/category";
import axios from "axios";

export const fetchCategories = () => {
    return async (dispatch: Dispatch<CategoryAction>) => {
        try {
            console.log(`${process.env.NEXT_PUBLIC_API_HOST}categories`)
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}categories`)
            dispatch({type:CategoryActionTypes.FETCH_CATEGORIES, payload: response.data})
        } catch (e) {
            dispatch({
                type:CategoryActionTypes.FETCH_CATEGORY_ERROR,
                payload: 'Произошла ошибка при загрузке постов'})
        }
    }
}

export const fetchCategory = (slug: string) => {
    return async (dispatch: Dispatch<CategoryAction>) => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}posts?slug=${slug}`)
            dispatch({type:CategoryActionTypes.FETCH_CATEGORY, payload: response.data[0]})
        } catch (e) {
            dispatch({
                type:CategoryActionTypes.FETCH_CATEGORY_ERROR,
                payload: 'Произошла ошибка при загрузке поста'})
        }
    }
}
