import React from 'react';
import { Link } from 'react-router-dom'
import { Grid, Card, CardMedia, Typography, makeStyles, CardActionArea } from '@material-ui/core';
import Moment from 'react-moment';

const useStyles = makeStyles(theme=>({
    root:{
        margin:theme.spacing(3,0),
        backgroundColor:'#00a896'
    },
    card:{
        padding:theme.spacing(3)
    },
    category:{
        position:'absolute',
        bottom:0,
        background:'linear-gradient(0deg, #000000b8, transparent)',
        padding:theme.spacing(2),
        width:'100%'
    },
    time:{
        background:'white',
        padding:theme.spacing(0,2),
        position:'absolute',
        bottom:10,
        right:10,
        marginRight:20,
    },
    title:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-end',
        height:'90%',
        padding:theme.spacing(3)
    }
}))

const Parties = ({article={}}) => {

    const classes = useStyles()

    const imageUrl = process.env.NODE_ENV !== 'development' ? 
                        article.image[0].url
                    :
                        process.env.REACT_APP_BACKEND_URL + article.image[0].url

    if(Object.keys(article).length<0){
        return null;
    }else{
        return ( 
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <div className={classes.card}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        image={imageUrl}
                                        component='img'
                                    />
                                    <div className={classes.category} >
                                        <Typography style={{color:'white',textTransform:'uppercase',fontWeight:'bold'}}>
                                            {article.category.name}
                                        </Typography>
                                    </div>
                                    <div className={classes.time}>
                                        <Typography style={{color:'#303f9f',display:'flex',flexDirection:'column',alignItems:'center'}} variant='h6'>
                                            <Moment format='DD'>{article.published_at}</Moment>
                                            <Moment format='MMM'>{article.published_at}</Moment>
                                        </Typography>
                                    </div>
                                </CardActionArea>
                            </Card>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className={classes.title}>
                            <Link to={`/article/${article.id}`}>
                                <Typography variant='h3' style={{fontWeight:'bold',color:'#f0f3bd'}}>
                                    {article.title}
                                </Typography>
                                <Typography style={{fontWeight:'bold',color:'#f0f3bdd9'}}>
                                    By {article.author.user_name}
                                </Typography>
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </div>
         );
    }
}
 
export default Parties;