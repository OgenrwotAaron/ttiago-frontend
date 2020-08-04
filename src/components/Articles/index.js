import React from 'react';
import Card from '../Card'
import { Grid, Typography, makeStyles } from '@material-ui/core';

import ClearAllIcon from '@material-ui/icons/ClearAll';
import LatestArticles from '../LatestArticles';

const useStyles = makeStyles(theme=>({
    heading:{
        display:'flex',
        alignItems:'center',
        margin:theme.spacing(2,0,1,0)
    },
    heading2:{
        display:'flex',
        alignItems:'center',
        margin:theme.spacing(1,0)
    }
}))

const Articles = ({articles}) => {

    const classes = useStyles()

    const leftArticle = [...articles].reverse()[0];
    const rightArticles = [...articles].slice(1,3);

    return (
        <div>
            <Typography variant='h5' className={classes.heading} component='i'> <ClearAllIcon fontSize='large'/> FEATURED</Typography>
            <Grid container spacing={2}>
                <Grid item sm={8} xs={12}>
                    <Card article={leftArticle} key={`article_${leftArticle.id}`} />
                </Grid>
                <Grid item sm={4} xs={12}>
                    <div className='uk-child-width-1-2@m uk-grid-match' data-uk-grid>
                        {rightArticles.map(article => (
                            <Card article={article} key={`article_${article.id}`} />
                        ))}
                    </div>
                </Grid>
            </Grid>
            <Typography variant='h5' className={classes.heading2} component='i'> <ClearAllIcon fontSize='large'/> LATEST ARTICLES</Typography>
            <LatestArticles articles={articles}/>
        </div>
    )
}

export default Articles