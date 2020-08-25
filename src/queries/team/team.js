import gql from 'graphql-tag';

const TEAM_QUERY = gql`
    query Users {
        users {
            id
            username
            title
            avatar {
                url
            }
        }
    }
`;

export default TEAM_QUERY;