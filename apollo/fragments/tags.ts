import { gql } from '@apollo/client';

export const TagsFragment = gql`
    fragment TagsFragment on Tag {
            name
            slug
            tags_img {
                img {
                    sourceUrl(size: LARGE)
                }
            }
    }
`;
