import React from 'react';
import { Typography, Grid, makeStyles } from '@material-ui/core';
import Query from '../../components/Query';

import AUTHORS_QUERY from '../../queries/author/authors'
import AuthorCard from '../../components/AuthorCard';

const useStyles = makeStyles(theme=>({
    root:{
        padding:theme.spacing(2,4)
    }
}))

const Authors = (props) => {

    const classes = useStyles()

    return ( 
        <div className={classes.root}>
            <Typography align='center' variant='h3'>Authors</Typography>
            <Grid container spacing={2}>
                <Query query={AUTHORS_QUERY}>
                    {({data:{authors}})=>{
                        return authors.map(author=>(
                            <Grid item xs={12} sm={6} md={4} key={author.email}>
                                <AuthorCard author={author} />
                            </Grid>
                        ))
                    }}
                </Query>
            </Grid>
        </div>
     );
}
 
export default Authors;