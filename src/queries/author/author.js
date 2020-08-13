import gql from 'graphql-tag'

const AUTHOR_QUERY = gql`
    query Authors($id: ID!) {
        author(id:$id) {
            id
            user_name
            email
            avatar {
                url
            }
            facebook
            twitter
            instagram
            biography {
                id
                cover_image {
                    url
                }
                details
            }
            user_names {
                id
                title
                image {
                    url
                }
                published_at
                category {
                    name
                }
            }
        }
    }
`;

export default AUTHOR_QUERY;