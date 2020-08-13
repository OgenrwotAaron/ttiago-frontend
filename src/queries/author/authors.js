import gql from 'graphql-tag';

const AUTHORS_QUERY = gql`
    query Authors {
        authors {
            id
            user_name
            email
            short_bio
            avatar {
                url
            }
            facebook
            twitter
            instagram
        }
    }
`;

export default AUTHORS_QUERY;