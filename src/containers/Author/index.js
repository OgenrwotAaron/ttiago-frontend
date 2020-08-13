import React from 'react';
import { useParams } from 'react-router-dom'
import Query from '../../components/Query';
import AUTHOR_QUERY from '../../queries/author/author';
import AuthorSingle from '../../components/AuthorSingle';

const Author = (props) => {

    const { id } = useParams();

    return ( 
        <div>
            <Query query={AUTHOR_QUERY} id={id}>
                {({data:{author}})=>(
                    <AuthorSingle author={author} />
                )}
            </Query>
        </div>
     );
}
 
export default Author;