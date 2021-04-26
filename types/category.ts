import { Iimg } from './acf'

export interface ICategoryContent {
    rendered: string;
    protected: boolean;
}

export interface ICategoryExcerpt {
    rendered: string;
    protected: boolean;
}

export interface ICategoryAcf {
    rendered: string;
    protected: boolean;
    img_prev: Iimg | boolean;
    img_fon: Iimg | boolean;
}

export interface ICategory {
    id: number;
    date: string;
    name: string;
    slug: string;
    status: string;
    content: ICategoryContent;
    excerpt: ICategoryExcerpt;
    categories: Number[];
    tags: Number[];
    acf: ICategoryAcf;
}

export interface CategoryState {
    categories: ICategory[];
    error: string;
}

export enum CategoryActionTypes {
    FETCH_CATEGORIES = 'FETCH_CATEGORIES',
    FETCH_CATEGORY = 'FETCH_CATEGORY',
    FETCH_CATEGORY_ERROR = 'FETCH_CATEGORY_ERROR',
}

interface FetchCategoriesAction {
    type: CategoryActionTypes.FETCH_CATEGORIES;
    payload: ICategory[]
}

interface FetchCategoryAction {
    type: CategoryActionTypes.FETCH_CATEGORY;
    payload: ICategory
}

interface FetchCategoryErrorAction {
    type: CategoryActionTypes.FETCH_CATEGORY_ERROR;
    payload: string
}

export type CategoryAction = FetchCategoriesAction | FetchCategoryAction | FetchCategoryErrorAction
