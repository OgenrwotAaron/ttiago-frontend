import gql from 'graphql-tag'

const COVER_QUERY = gql`
    query Covers {
        covers {
            id
            name
            date_added
            image {
                url
            }
        }
    }
`

export default COVER_QUERY