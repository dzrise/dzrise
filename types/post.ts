import { Iimg } from './acf'

export interface IPostTitle {
    rendered: string;
}

export interface IPostContent {
    rendered: string;
    protected: boolean;
}

export interface IPostExcerpt {
    rendered: string;
    protected: boolean;
}

export interface IPostAcf {
    rendered: string;
    protected: boolean;
    img_prev: Iimg | boolean;
    img_fon: Iimg | boolean;
}

export interface IPost {
    id: number;
    date: string;
    title: IPostTitle;
    slug: string;
    status: string;
    content: IPostContent;
    excerpt: IPostExcerpt;
    categories: Number[];
    tags: Number[];
    acf: IPostAcf;
}

export interface PostState {
    posts: IPost[];
    error: string;
}

export enum PostActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POST = 'FETCH_POST',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
}

interface FetchPostsAction {
    type: PostActionTypes.FETCH_POSTS;
    payload: IPost[]
}

interface FetchPostAction {
    type: PostActionTypes.FETCH_POST;
    payload: IPost
}

interface FetchPostsErrorAction {
    type: PostActionTypes.FETCH_POSTS_ERROR;
    payload: string
}

export type PostAction = FetchPostsAction | FetchPostAction | FetchPostsErrorAction
