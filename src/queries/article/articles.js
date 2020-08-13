import gql from 'graphql-tag';

const ARTICLES_QUERY = gql`
    query Articles {
        articles {
            id
            title
            content
            author {
                user_name
            }
            published_at
            category {
                id
                name
            }
            image {
                url
            }
        }
    }
`;

export default ARTICLES_QUERY