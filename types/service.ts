import { Iimg } from './acf'

export interface IServiceContent {
    rendered: string;
    protected: boolean;
}

export interface IServiceExcerpt {
    rendered: string;
    protected: boolean;
}

export interface IServiceAcf {
    rendered: string;
    protected: boolean;
    img_prev: Iimg | boolean;
    img_fon: Iimg | boolean;
}

export interface IService {
    id: number;
    date: string;
    name: string;
    slug: string;
    status: string;
    content: IServiceContent;
    excerpt: IServiceExcerpt;
    categories: Number[];
    tags: Number[];
    acf: IServiceAcf;
}

export interface ServiceState {
    services: IService[];
    error: string;
}

export enum ServiceActionTypes {
    FETCH_SERVICES = 'FETCH_SERVICES',
    FETCH_SERVICE = 'FETCH_SERVICE',
    FETCH_SERVICE_ERROR = 'FETCH_SERVICE_ERROR',
}

interface FetchServicesAction {
    type: ServiceActionTypes.FETCH_SERVICES;
    payload: IService[]
}

interface FetchServiceAction {
    type: ServiceActionTypes.FETCH_SERVICE;
    payload: IService
}

interface FetchServiceErrorAction {
    type: ServiceActionTypes.FETCH_SERVICE_ERROR;
    payload: string
}

export type ServiceAction = FetchServicesAction | FetchServiceAction | FetchServiceErrorAction
