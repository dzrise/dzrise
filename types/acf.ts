export interface IimgSizes {
    thumbnail: string;
    medium: string;
    medium_large: string;
    large: string;
}

export interface Iimg {
    ID: number;
    title: string;
    filename: string;
    url: string;
    alt: string;
    sizes: IimgSizes;
}
