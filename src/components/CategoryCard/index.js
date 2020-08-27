import React from 'react';
import { Card, CardActionArea, CardMedia, Typography, Avatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
    author:{
        display:'flex',
        alignItems:'center',
        padding:theme.spacing(2)
    },
    name:{
        marginLeft:theme.spacing(1)
    },
    title:{
        padding:theme.spacing(0,2,2,2)
    },
    cardMedia:{
        objectFit:'cover'
    },
    card:{
        '&:hover':{
            boxShadow: '0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)'
        }
    }
}))

const CategoryCard = ({article}) => {

    const classes = useStyles()

    const imageUrl = process.env.NODE_ENV !== 'development' ? 
                            article.image[0].url
                        :
                            process.env.REACT_APP_BACKEND_URL + article.image[0].url;

    const avatarUrl = process.env.NODE_ENV !== 'development' ?
                            article.author.avatar.url
                        :
                            process.env.REACT_APP_BACKEND_URL + article.author.avatar.url

    return ( 
        <div>
            <Card className={classes.card} elevation={0}>
                <CardActionArea href={`/article/${article.id}`}>
                    <CardMedia
                        image={imageUrl}
                        component='img'
                        height='250'
                        className={classes.cardMedia}
                    />
                    <div className={classes.author}>
                        <Avatar src={avatarUrl} />
                        <Typography className={classes.name} component='span'>
                            {article.author.user_name}
                        </Typography>
                    </div>
                    <Typography className={classes.title} variant='h6'>
                        {article.title}
                    </Typography>
                </CardActionArea>
            </Card>
        </div>
     );
}
 
export default CategoryCard;