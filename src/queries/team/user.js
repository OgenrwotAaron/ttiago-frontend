import gql from 'graphql-tag';

const USER_QUERY = gql`
    query Users($id: ID!) {
        user(id:$id){
            id
            username
            email
            title
            avatar {
                url
            }
            user_bio {
                cover {
                    url
                }
                details
            }
        }
    }
`
export default USER_QUERY;