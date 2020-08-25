import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';

import CategoryCard from '../CategoryCard';

const useStyles = makeStyles(theme=>({
    root:{
        marginTop:theme.spacing(2),
        padding:theme.spacing(0,5)
    }
}))

const CategoryArticles = ({articles}) => {

    const classes = useStyles()

    return (
        <Grid className={classes.root} container spacing={2}>
            {
                articles.map(article=>(
                    <Grid item xs={12} md={4} sm={6} key={article.id}>
                        <CategoryCard article={article} />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default CategoryArticles;