import {Dispatch} from "react";
import {PostAction, PostActionTypes} from "../../types/post";
import axios from "axios";

export const fetchPosts = () => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            console.log(`${process.env.NEXT_PUBLIC_API_HOST}posts`)
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}posts`)
            dispatch({type: PostActionTypes.FETCH_POSTS, payload: response.data})
        } catch (e) {
            dispatch({
                type: PostActionTypes.FETCH_POSTS_ERROR,
                payload: 'Произошла ошибка при загрузке постов'})
        }
    }
}

export const fetchPost = (slug: string) => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}posts?slug=${slug}`)
            dispatch({type: PostActionTypes.FETCH_POST, payload: response.data[0]})
        } catch (e) {
            dispatch({
                type: PostActionTypes.FETCH_POSTS_ERROR,
                payload: 'Произошла ошибка при загрузке поста'})
        }
    }
}
