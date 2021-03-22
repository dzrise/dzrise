export interface IPost {
    id: string;
    user_id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    content_html: string;
    published_at: string;
    published: boolean;
    created_at: string;
    updated_at: string;
    metadata: string;
    powerseo_title: string;
    powerseo_description: string;
    powerseo_keywords: string;
    powerseo_canonical_url: string;
    powerseo_redirect_url: string;
    powerseo_robot_index: string;
    powerseo_robot_follow: string;
    summary: string;
    has_summary: boolean;
}

export interface PostState {
    tracks: IPost[];
    error: string;
}

export enum PostActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
}

interface FetchPostsAction {
    type: PostActionTypes.FETCH_POSTS;
    payload: IPost[]
}

interface FetchPostsErrorAction {
    type: PostActionTypes.FETCH_POSTS_ERROR;
    payload: string
}

export type PostAction = FetchPostsAction | FetchPostsErrorAction
