import React from 'react';
import ReactMarkdown from 'react-markdown';
import { makeStyles, Avatar, Typography, IconButton } from '@material-ui/core';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles(theme=>({
    hero:{
        height:'60vh',
        backgroundSize:'cover',
        backgroundAttachment:'fixed',
        marginBottom:theme.spacing(4)
    },
    avatar:{
        width:theme.spacing(15),
        height:theme.spacing(15)
    },
    holder:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        height:'100%',
        backgroundColor:'#00000070'
    },
    details:{
        padding:theme.spacing(2,4)
    },
    detailsImage:{
        maxWidth:'100%'
    }
}))

const AuthorSingle = ({author}) => {
    const classes = useStyles()

    const coverImage = process.env.NODE_ENV !== 'development' ? 
                            author.biography.cover_image.url
                        :
                            process.env.REACT_APP_BACKEND_URL + author.biography.cover_image.url
                            
    const avatarUrl = process.env.NODE_ENV !== 'development' ? 
                            author.avatar.url
                        :
                            process.env.REACT_APP_BACKEND_URL + author.avatar.url

    const transformUri = uri =>{
        const imageUri = process.env.NODE_ENV !== 'development' ? 
                            uri
                        :
                            process.env.REACT_APP_BACKEND_URL + uri
        
        return imageUri
    }

    const renderImage = props =>(
        <img {...props} alt={props.alt} className={classes.detailsImage} />
    )

    const renderText = props =>(
        <Typography color='textSecondary' variant='body1' component='span'>
            {props.children}
        </Typography>
    )

    return ( 
        <div>
            <div style={{backgroundImage:`url(${coverImage})`}} className={classes.hero}>
                <div className={classes.holder}>
                    <Avatar src={avatarUrl} className={classes.avatar}/>
                    <Typography style={{color:'white', fontWeight:'bold'}} variant='h5'>
                        {author.user_name}
                    </Typography>
                    <Typography style={{color:'white',display:'flex',alignItems:'center'}}>
                        {author.email}
                    </Typography>
                    <div>
                        {author.facebook && <IconButton href={author.facebook} ><FacebookIcon style={{color:'white'}}/></IconButton>}
                        {author.twitter && <IconButton href={author.twitter}><TwitterIcon style={{color:'white'}}/></IconButton>}
                        {author.instagram && <IconButton href={author.instagram}><InstagramIcon style={{color:'white'}}/></IconButton>}
                    </div>
                </div>
            </div>
            <Typography align='center' variant='h4'>About {author.user_name.split(' ')[0]}</Typography>
            <ReactMarkdown 
                renderers={{image:renderImage,text:renderText}} 
                transformImageUri={transformUri} 
                source={author.biography.details} 
                className={classes.details} 
            />
            <Typography align='center' color='textSecondary' variant='h4'>Articles from {author.user_name.split(' ')[0]}</Typography>
            
        </div>
     );
}
 
export default AuthorSingle;