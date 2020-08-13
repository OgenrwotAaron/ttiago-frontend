import gql from 'graphql-tag'

const CoverQuery = gql`
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