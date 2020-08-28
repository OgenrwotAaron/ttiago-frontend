import React from 'react';
import Card from '../Card'
import { Grid, Typography, makeStyles } from '@material-ui/core';

import ClearAllIcon from '@material-ui/icons/ClearAll';
import LatestArticles from '../LatestArticles';
import Parties from '../Parties';
import NewSlider from '../NewsSlider';

const useStyles = makeStyles(theme=>({
    heading:{
        display:'flex',
        alignItems:'center',
        margin:theme.spacing(2,0,1,0),
        fontWeight:'bold',
        color:'#5ba124'
    },
    heading2:{
        display:'flex',
        alignItems:'center',
        margin:theme.spacing(2,0),
        fontWeight:'bold',
        color:'#5ba124'
    },
}))

const Articles = ({articles, ads}) => {

    const classes = useStyles()

    const leftArticle = [articles.filter(article=>article.category.name === 'featured')].reverse()[0];
    const rightArticles = [articles.filter(article=>article.category.name === 'featured')].reverse().slice(1,3);

    return (
        <div id='featured'>
            {articles.filter(article=>article.category.name === 'featured').length > 0 &&
                <>
                    <Typography variant='h5' className={classes.heading} component='i'> <ClearAllIcon fontSize='large'/> FEATURED</Typography>
                    <Grid container spacing={2}>
                        <Grid item sm={8} xs={12}>
                            <Card article={leftArticle} key={`article_${leftArticle.id}`} />
                        </Grid>
                        <Grid item sm={4} xs={12}>
                                {rightArticles.map(article => (
                                    <Card article={article} key={`article_${article.id}`} />
                                ))}
                        </Grid>
                    </Grid> 
                </>
            } 
            <Typography variant='h5' className={classes.heading2} component='i'> <ClearAllIcon fontSize='large'/> LATEST ARTICLES</Typography>
            <LatestArticles ads={ads} articles={articles}/>
            <Parties article={articles.filter(article=>article.category.name==='Parties').reverse()[0]} />
            <NewSlider articles={articles}/>
        </div>
    )
}

export default Articles