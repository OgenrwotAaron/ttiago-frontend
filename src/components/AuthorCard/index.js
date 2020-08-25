import React from 'react';
import { Card, makeStyles, CardContent, Typography, Button, CardMedia } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
    card:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        '&:hover':{
            boxShadow:'1px 1px 20px #00000050',
        }
    },
    content:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:0
    },
    avatar:{
        height:250,
        objectPosition:'top'
    },
    button:{
        color:'#5ba024'
    }
}))

const AuthorCard = ({user}) => {

    const classes = useStyles()

    const imageUrl = process.env.REACT_APP_BACKEND_URL + user.avatar.url

    return ( 
        <Card className={classes.card} elevation={0}>
            <CardContent className={classes.content}>
                <CardMedia
                    component='img'
                    src={imageUrl}
                    className={classes.avatar}
                />
                <Typography variant='h6'>
                    {user.username}
                </Typography>
                <Typography color='textSecondary'>
                    {user.title}
                </Typography>
                <Button className={classes.button} href={`/user/${user.id}`} variant='outlined'>
                    Meet {user.username.split(' ')[0]}
                </Button>
            </CardContent>
        </Card>
     );
}
 
export default AuthorCard;