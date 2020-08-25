import React from 'react';
import { useParams } from 'react-router-dom'

import Query from '../../components/Query';

import CATEGORY_QUERY from '../../queries/category/articles'
import CategoryArticles from '../../components/CategoryArticles';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
    title:{
        padding:theme.spacing(1,4)
    }
}))

const Category = () => {

    let { id } = useParams()

    const classes = useStyles()

    return ( 
        <Query query={CATEGORY_QUERY} id={id}>
            {({ data: { category }}) => {
                return (
                    <div>
                        <div className='uk-section'>
                            <div className='uk-container uk-container-large'>
                                <Typography color='textSecondary' className={classes.title} style={{fontWeight:'300'}} variant='h3'>{category.name}</Typography>
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