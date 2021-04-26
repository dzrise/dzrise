import { gql } from '@apollo/client';

export const SeoPage = gql`
    fragment SeoPage on Page {
        seo{
            canonical
            title
            metaDesc
            focuskw
            metaRobotsNoindex
            metaRobotsNofollow
            opengraphAuthor
            opengraphDescription
            opengraphTitle
            opengraphDescription
            opengraphImage {
                altText
                sourceUrl
                srcSet
            }
            opengraphUrl
            opengraphSiteName
            opengraphPublishedTime
            opengraphModifiedTime
            twitterTitle
            twitterDescription
            twitterImage {
                altText
                sourceUrl
                srcSet
            }
            breadcrumbs {
                url
                text
            }
            cornerstone
            schema {
                pageType
                articleType
                raw
            }
            readingTime
            fullHead
        }
    }
`;
