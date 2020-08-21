import React from 'react';
import { Card, makeStyles, CardContent, Typography, Avatar, IconButton, Button } from '@material-ui/core';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles(theme=>({
    card:{
        boxShadow:'1px 1px 50px #00000050',
        padding:theme.spacing(2),
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    avatar:{
        width:theme.spacing(20),
        height:theme.spacing(20)
    },
    content:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    }
}))

const AuthorCard = ({author}) => {

    const classes = useStyles()

    const imageUrl = process.env.REACT_APP_BACKEND_URL + author.avatar.url

    return ( 
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <Avatar className={classes.avatar} src={imageUrl}/>
                <Typography variant='h5'>
                    {author.user_name}
                </Typography>
                <Typography color='textSecondary'>
                    {author.email}
                </Typography>
                <Typography align='center' component='i' variant='body2'>
                    {author.short_bio}
                </Typography>
                <div>
                   {author.facebook && <IconButton href={author.facebook} ><FacebookIcon/></IconButton>}
                   {author.twitter && <IconButton href={author.twitter}><TwitterIcon/></IconButton>}
                   {author.instagram && <IconButton href={author.instagram}><InstagramIcon/></IconButton>}
                </div>
                <Button href={`/author/${author.id}`} variant='outlined'>
                    Full Bio
                </Button>
            </CardContent>
        </Card>
     );
}
 
export default AuthorCard;