import React from 'react';
import { Grid, makeStyles, Typography, Card, CardActionArea, CardMedia, Divider } from '@material-ui/core';
import LatestCard from '../LatestCard';
import Slick from 'react-slick';

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
    },
    divider:{
        margin:theme.spacing(2,0),
        height:5,
        backgroundColor:'#5ba124'
    }
}))

const LatestArticles = ({articles, ads }) => {

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
            <Divider className={classes.divider}/>
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
                        {ads.map(ad=>{

                            const imageUrl = process.env.NODE_ENV !== 'development' ? 
                                                ad.adImage.url
                                            :
                                                process.env.REACT_APP_BACKEND_URL + ad.adImage.url
                            return (
                                <Card key={ad.id}>
                                    <CardActionArea href={ad.url === 'null' ? '/':ad.url}>
                                        <CardMedia
                                            image={imageUrl}
                                            component='img'
                                        />
                                        <div className={classes.title}>
                                            <Typography variant='caption' style={{color:'white'}} >
                                                {ad.company}
                                            </Typography>
                                        </div>
                                    </CardActionArea>
                                </Card>
                            )
                        })}
                    </Slick>
                </Grid>
            </Grid>
            <Divider className={classes.divider}/>
        </div>
     );
}
 
export default LatestArticles;