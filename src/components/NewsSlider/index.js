import React from 'react';
import Slider from 'react-slick'
import { makeStyles, Card, CardActionArea, CardMedia, Typography } from '@material-ui/core';
import Moment from 'react-moment'

const useStyles = makeStyles(theme=>({
    root:{
        width:'98%',
        padding:theme.spacing(2,0)
    },
    card:{
        margin:theme.spacing(3)
    },

    category:{
        position:'absolute',
        bottom:theme.spacing(6),
        backgroundColor:'white',
        padding:theme.spacing(0,1)
    }
}))

const NewSlider = ({articles}) => {

    const classes = useStyles()

    const settings = {
        infinite:true,
        speed:500,
        arrows:false,
        slidesToShow:4,
        slidesToScroll:1,
        autoplay:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }

    return ( 
        <div className={classes.root}>
            <Slider {...settings}>
                {articles.map(article=>{
                    const imageUrl = process.env.NODE_ENV !== 'development' ? 
                                        article.image[0].url
                                    :
                                        process.env.REACT_APP_BACKEND_URL + article.image[0].url

                    return (
                        <Card elevation={0} key={article.id}>
                            <CardActionArea className={classes.card}>
                                <CardMedia
                                    image={imageUrl}
                                    component='img'
                                    height='150'
                                />
                                <div className={classes.category}>
                                    <Typography style={{fontWeight:'bold'}}>
                                        {article.category.name}
                                    </Typography>
                                </div>
                                <div>
                                    <Typography color='textSecondary'>
                                        <Moment format='DD MMM YYYY'>{article.published_at}</Moment>
                                    </Typography>
                                    <Typography style={{fontWeight:'bold'}}>
                                        {article.title}
                                    </Typography>
                                </div>
                            </CardActionArea>
                        </Card>
                    )
                })}
            </Slider>
        </div>
     );
}
 
export default NewSlider;