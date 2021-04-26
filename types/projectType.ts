import { Iimg } from './acf'

export interface IProjectTypeContent {
    rendered: string;
    protected: boolean;
}

export interface IProjectTypeExcerpt {
    rendered: string;
    protected: boolean;
}

export interface IProjectTypeAcf {
    rendered: string;
    protected: boolean;
    img_prev: Iimg | boolean;
    img_fon: Iimg | boolean;
}

export interface IProjectType {
    id: number;
    date: string;
    name: string;
    slug: string;
    status: string;
    content: IProjectTypeContent;
    excerpt: IProjectTypeExcerpt;
    categories: Number[];
    tags: Number[];
    acf: IProjectTypeAcf;
}

export interface ProjectTypeState {
    projectTypes: IProjectType[];
    error: string;
    active: number;
}

export enum ProjectTypeActionTypes {
    FETCH_PROJECTTYPES = 'FETCH_PROJECTTYPES',
    FETCH_PROJECTTYPE = 'FETCH_PROJECTTYPE',
    FETCH_PROJECTTYPE_ERROR = 'FETCH_PROJECTTYPE_ERROR',
    SET_PROJECTTYPE_ACTIVE = 'SET_PROJECTTYPE_ACTIVE',
}

interface FetchProjectTypesAction {
    type: ProjectTypeActionTypes.FETCH_PROJECTTYPES;
    payload: IProjectType[]
}

interface FetchProjectTypeAction {
    type: ProjectTypeActionTypes.FETCH_PROJECTTYPE;
    payload: IProjectType
}

interface FetchProjectTypeErrorAction {
    type: ProjectTypeActionTypes.FETCH_PROJECTTYPE_ERROR;
    payload: string
}

interface SetProjectTypeActiveAction {
    type: ProjectTypeActionTypes.SET_PROJECTTYPE_ACTIVE;
    payload: string
}

export type ProjectTypeAction = FetchProjectTypesAction | FetchProjectTypeAction | FetchProjectTypeErrorAction | SetProjectTypeActiveAction
