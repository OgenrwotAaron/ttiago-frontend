import gql from 'graphql-tag'

const CATEGORY_QUERY = gql`
    query Category($id: ID!) {
        category(id: $id) {
            name
            articles {
                id
                title
                content
                image {
                    url
                }
                category {
                    name
                    id
                }
            }
        }
    }
`;

export default CATEGORY_QUERY