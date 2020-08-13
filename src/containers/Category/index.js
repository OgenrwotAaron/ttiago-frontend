import React from 'react';
import { useParams } from 'react-router-dom'

import Query from '../../components/Query';

import CATEGORY_QUERY from '../../queries/category/articles'
import CategoryArticles from '../../components/CategoryArticles';
import { Typography } from '@material-ui/core';

const Category = () => {

    let { id } = useParams()

    return ( 
        <Query query={CATEGORY_QUERY} id={id}>
            {({ data: { category }}) => {
                return (
                    <div>
                        <div className='uk-section'>
                            <div className='uk-container uk-container-large'>
                                <Typography variant='h3'>{category.name}</Typography>
                                <CategoryArticles articles={category.articles}/>
                            </div>
                        </div>
                    </div>
                )
            }}
        </Query>
     );
}
 
export default Category;