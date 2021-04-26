import { Iimg } from './acf'

export interface ITagContent {
    rendered: string;
    protected: boolean;
}

export interface ITagExcerpt {
    rendered: string;
    protected: boolean;
}

export interface ITagAcf {
    rendered: string;
    protected: boolean;
    img_prev: Iimg | boolean;
    img_fon: Iimg | boolean;
}

export interface ITag {
    id: number;
    date: string;
    name: string;
    slug: string;
    status: string;
    content: ITagContent;
    excerpt: ITagExcerpt;
    categories: Number[];
    tags: Number[];
    acf: ITagAcf;
}

export interface TagState {
    tags: ITag[];
    error: string;
}

export enum TagActionTypes {
    FETCH_TAGS = 'FETCH_TAGS',
    FETCH_TAG = 'FETCH_TAG',
    FETCH_TAG_ERROR = 'FETCH_TAG_ERROR',
}

interface FetchTagsAction {
    type: TagActionTypes.FETCH_TAGS;
    payload: ITag[]
}

interface FetchTagAction {
    type: TagActionTypes.FETCH_TAG;
    payload: ITag
}

interface FetchTagErrorAction {
    type: TagActionTypes.FETCH_TAG_ERROR;
    payload: string
}

export type TagAction = FetchTagsAction | FetchTagAction | FetchTagErrorAction
