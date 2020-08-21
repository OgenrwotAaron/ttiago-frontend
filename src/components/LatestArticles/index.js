import React from 'react';
import { Grid, makeStyles, Typography, Card, CardActionArea, CardMedia } from '@material-ui/core';
import LatestCard from '../LatestCard';
import Slick from 'react-slick';
import Moment from 'react-moment';

const useStyles = makeStyles(theme=>({
    cards:{
        margin:theme.spacing(2,0)
    },
    title:{
        position:'absolute',
        bottom:0,
        padding:theme.spacing(1),
        background:'linear-gradient(0deg, #000000b8, transparent)',
        width:'100%'
    }
}))

const LatestArticles = ({articles}) => {

    const classes = useStyles()

    let reversedArticles = [...articles].reverse()

    const settings = {
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        arrows:false
    }

    return ( 
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={9} md={8}>
                    {reversedArticles.slice(0,3).map(article=>(
                            <div className={classes.cards} key={article.id}>
                                <LatestCard article={article} />
                            </div>
                        )
                    )}
                </Grid>
                <Grid item xs={12} sm={3} md={4}>
                    <Typography variant='h6' component='b'>Advertisement</Typography>
                    <Slick {...settings} >
                        {articles.map(article=>{

                            const imageUrl = process.env.REACT_APP_BACKEND_URL + article.image[0].url

                            return (
                                <Card key={article.id}>
                                    <CardActionArea>
                                        <CardMedia
                                            image={imageUrl}
                                            component='img'
                                        />
                                        <div className={classes.title}>
                                            <Typography style={{color:'white'}} variant='h6' component='b'>
                                                {article.title} |&nbsp;
                                            </Typography>
                                            <Typography variant='caption' style={{color:'white'}} >
                                                <Moment format='DD MMM YYYY'>{article.published_at}</Moment>
                                            </Typography>
                                        </div>
                                    </CardActionArea>
                                </Card>
                            )
                        })}
                    </Slick>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default LatestArticles;