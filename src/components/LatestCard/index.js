import React from 'react';
import { Card, CardActionArea, CardMedia, Typography, makeStyles, Grid } from '@material-ui/core';
import Moment from 'react-moment'

const useStyles = makeStyles(theme=>({
    category:{
        backgroundColor:theme.palette.grey[600],
        padding:theme.spacing(0.5,1),
        fontWeight:'bold',
        color:'white'
    }
}))

const LatestCard = ({article}) => {

    const classes = useStyles()

    const imageUrl = process.env.REACT_APP_BACKEND_URL + article.image[0].url

    return ( 
        <div>
            <Card elevation={0}>
                <CardActionArea href={`/article/${article.id}`}>
                    <Grid container spacing={1}>
                        <Grid item xs={4}>
                            <CardMedia
                                src={imageUrl}
                                component='img'
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <div>
                                <Typography 
                                    variant='caption' 
                                    className={classes.category}
                                >
                                    {article.category.name}
                                </Typography>
                                <Typography style={{bold:'500'}} variant='h6'>
                                    {article.title}
                                </Typography>
                                <Typography variant='caption' color='textSecondary' >
                                    {article.author.user_name} |&nbsp;
                                </Typography>
                                <Typography variant='caption' color='textSecondary' >
                                    <Moment format='DD MMM YYYY'>{article.published_at}</Moment>
                                </Typography>

                                <Typography color='textSecondary' variant='body1'>
                                    {article.content.slice(0,100)}...
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </CardActionArea>
            </Card>
        </div>
     );
}
 
export default LatestCard;