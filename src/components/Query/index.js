import React from 'react';
import { useQuery } from '@apollo/client'
import { Skeleton } from '@material-ui/lab'

const Query = ({children, query, id}) =>{
    const { data, loading, error } = useQuery(query,{
        variables:{
            id:id
        }
    })

    if (loading) return <p><Skeleton variant='text' /></p>;
    if (error) return <p>Error: {JSON.stringify(error)}</p>

    return children({data})
}

export default Query;