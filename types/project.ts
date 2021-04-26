import { Iimg } from './acf'

export interface IProjectContent {
    rendered: string;
    protected: boolean;
}

export interface IProjectExcerpt {
    rendered: string;
    protected: boolean;
}

export interface IProjectAcf {
    rendered: string;
    protected: boolean;
    img_prev: Iimg | boolean;
    img_fon: Iimg | boolean;
}

export interface IProject {
    id: number;
    date: string;
    name: string;
    slug: string;
    status: string;
    content: IProjectContent;
    excerpt: IProjectExcerpt;
    categories: Number[];
    tags: Number[];
    acf: IProjectAcf;
}

export interface ProjectState {
    projects: IProject[];
    error: string;
}

export enum ProjectActionTypes {
    FETCH_PROJECTS = 'FETCH_PROJECTS',
    FETCH_PROJECT = 'FETCH_PROJECT',
    FETCH_PROJECT_ERROR = 'FETCH_PROJECT_ERROR',
}

interface FetchProjectsAction {
    type: ProjectActionTypes.FETCH_PROJECTS;
    payload: IProject[]
}

interface FetchProjectAction {
    type: ProjectActionTypes.FETCH_PROJECT;
    payload: IProject
}

interface FetchProjectErrorAction {
    type: ProjectActionTypes.FETCH_PROJECT_ERROR;
    payload: string
}

export type ProjectAction = FetchProjectsAction | FetchProjectAction | FetchProjectErrorAction
