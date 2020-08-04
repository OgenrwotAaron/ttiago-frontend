import React from 'react';
import { Card, CardActionArea, CardMedia, makeStyles, Chip, Typography } from '@material-ui/core';
import Moment from 'react-moment';

import ScheduleIcon from '@material-ui/icons/Schedule';

const useStyles = makeStyles(theme=>({
    details:{
        position:'absolute',
        bottom:0,
        background:'linear-gradient(0deg, #000000b8, transparent)',
        width:'100%',
        padding:theme.spacing(2),
    },
    title:{
        color:'white',
        marginTop:theme.spacing(1),
    },
    time:{
        display:'flex',
        color:'#b5b5b5'
    },
    card:{
        marginBottom:theme.spacing(2),
    }
}))

const ArticleCard = ({ article }) => {

    const classes = useStyles()

    const imageUrl = process.env.NODE_ENV !== 'development' ? 
                        article.image[0].url
                    :
                        process.env.REACT_APP_BACKEND_URL + article.image[0].url

    return ( 
            <Card className={classes.card}>
                <CardActionArea href={`/article/${article.id}`}>
                    <CardMedia
                        image={imageUrl}
                        component='img'
                    />
                    <div className={classes.details}>
                        <Chip color='primary' label={article.category.name} size='small' />
                        <Typography variant='h5' className={classes.title}>{article.title}<Typography variant='caption'>- By {article.author}</Typography></Typography>
                        <Typography className={classes.time}>
                            <ScheduleIcon fontSize='small' />
                            &nbsp;
                            <Moment fromNow ago >
                                {article.published_at}
                            </Moment>
                            &nbsp;
                            ago
                        </Typography>
                    </div>
                </CardActionArea>
            </Card>
     );
}
 
export default ArticleCard;