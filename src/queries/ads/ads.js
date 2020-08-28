import gql from 'graphql-tag'

const ads = gql`
    query Advertisements {
        advertisements {
            company,
            adImage {
                url
            }
            position
            url
        }
    }
`

export default ads;