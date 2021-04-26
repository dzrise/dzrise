import { Iimg } from './acf'
import { ITag } from './tag'
import {IPost} from "./post";

export interface ITopBannerSlide {
    img: string
    imgFon: string
    title: string
    subtitle: string
    btn: boolean
    btn_text: string
    btn_link: string
}

export interface IAboutMeItem {
    about_me_tilte: string
    about_me_text: string
    about_me_img:  string
}

export interface IServiceItem {
    title: string
    number: string
    text: string
    tags: ITag[]
}

export interface IService {
    title: string
    services: IServiceItem[]
}

export interface IPortfolioItem {
    title: string;
    link: string;
    img: Iimg;
    text:string;
    tags: ITag[];
}

export interface IPortfolio {
    title: string;
    items: IPortfolioItem[];
}

export interface IHomeSettings {
    banner_bool: boolean;
    banner_top: ITopBannerSlide[];
    about_me_bool: boolean;
    about_me: IAboutMeItem;
    service_bool: boolean;
    service: IService;
    portfolio_bool: boolean;
    portfolio: IPortfolio;
    head_tags: any[]
}

export interface IErrors {
    home: string;
}

export interface PageState {
    home: IHomeSettings | {};
    errors: IErrors;
}

export enum PageActionTypes {
    FETCH_SETTINGS_HOME = 'FETCH_SETTINGS_HOME',
    FETCH_SETTINGS_HOME_ERROR = 'FETCH_SETTINGS_HOME_ERROR',
}

interface FetchHomeSettingsAction {
    type: PageActionTypes.FETCH_SETTINGS_HOME;
    payload: IHomeSettings
}

interface FetchHomeSettingsErrorAction {
    type: PageActionTypes.FETCH_SETTINGS_HOME_ERROR;
    payload: string
}

export type PageAction = FetchHomeSettingsAction | FetchHomeSettingsErrorAction
