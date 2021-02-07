import * as types from '../types'

export const fetchPosts = () => async dispatch =>{
    const res = await axios.get(API_HOST + '/blog');
    dispatch({
        type: types.GET_POSTS,
        payload: res.data
    })
}
