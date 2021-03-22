import {Dispatch} from "react";
import {PostAction, PostActionTypes} from "../../types/post";
import axios from "axios";

export const fetchPosts = () => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            const response = await axios.get('https://api.dzrise.ru/blog/posts')
            dispatch({type: PostActionTypes.FETCH_POSTS, payload: response.data})
        } catch (e) {
            dispatch({
                type: PostActionTypes.FETCH_POSTS_ERROR,
                payload: 'Произошла ошибка при загрузке постов'})
        }
    }
}
