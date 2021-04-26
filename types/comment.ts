import { Iimg } from './acf'

export interface ICommentTitle {
    rendered: string;
}

export interface ICommentContent {
    rendered: string;
    protected: boolean;
}

export interface ICommentExcerpt {
    rendered: string;
    protected: boolean;
}

export interface ICommentAcf {
    rendered: string;
    protected: boolean;
    img_prev: Iimg | boolean;
    img_fon: Iimg | boolean;
}

export interface IComment {
    id: number;
    date: string;
    title: ICommentTitle;
    slug: string;
    status: string;
    content: ICommentContent;
    excerpt: ICommentExcerpt;
    categories: Number[];
    tags: Number[];
    acf: ICommentAcf;
}

export interface IParent {
     id: number,
     name: string
}

export interface CommentState {
    comments: IComment[];
    error: string;
    parent: IParent | null;
}

export enum CommentActionTypes {
    FETCH_COMMENTS = 'FETCH_COMMENTS',
    FETCH_COMMENT = 'FETCH_COMMENT',
    SET_PARENT = 'SET_PARENT',
    FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR',
}

interface FetchCommentsAction {
    type: CommentActionTypes.FETCH_COMMENTS;
    payload: IComment[]
}

interface FetchCommentAction {
    type: CommentActionTypes.FETCH_COMMENT;
    payload: IComment[]
}

interface FetchCommentsErrorAction {
    type: CommentActionTypes.FETCH_COMMENTS_ERROR;
    payload: string
}

interface SetParentAction {
    type: CommentActionTypes.SET_PARENT;
    payload: IParent;
}

export type CommentAction = FetchCommentsAction | FetchCommentsErrorAction | FetchCommentAction | SetParentAction
