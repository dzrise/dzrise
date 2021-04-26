import {Dispatch} from "react";
import {CommentAction, CommentActionTypes} from "../../types/comment";
import { Notify } from "notiflix";
import axios from "axios";



export const fetchComments = (id) => {
    return async (dispatch: Dispatch<CommentAction>) => {
        console.log(1)
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}comments?post=${id}`)
            dispatch({type: CommentActionTypes.FETCH_COMMENTS, payload: response.data})
        } catch (e) {
            dispatch({
                type: CommentActionTypes.FETCH_COMMENTS_ERROR,
                payload: 'Произошла ошибка при загрузке клмментариев'})
        }
    }
}

export const postComment = (id, data) => {
    return async (dispatch: Dispatch<CommentAction>) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_HOST}comments?post=${id}`, data)
            dispatch({type: CommentActionTypes.FETCH_COMMENT, payload: response.data})
            Notify.Success('Ваш комментарий успешно добавлен');
        } catch (e) {
            if(e.response){
                Notify.Failure(e.response.data.message);
            }
            dispatch({
                type: CommentActionTypes.FETCH_COMMENTS_ERROR,
                payload: 'Произошла ошибка при загрузке клмментариев'})
        }
    }
}

export const setParent = (parent) => {
    return {
        type: CommentActionTypes.SET_PARENT,
        payload: parent
    }
}

