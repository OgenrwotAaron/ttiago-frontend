import React from 'react';
import { useParams } from 'react-router-dom'
import Query from '../../components/Query';
import USER_QUERY from '../../queries/team/user';
import { makeStyles, Avatar, Typography } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';

const useStyles = makeStyles(theme=>({
    hero:{
        height:'50vh',
        backgroundPosition:'center'
    },
    summary:{
        backgroundColor:'#00000070',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    avatar:{
        width:theme.spacing(15),
        height:theme.spacing(15)
    },
    markdown:{
        padding:theme.spacing(4,5)
    },
    detailsImage:{
        maxWidth:'100%'
    }
}))

const User = (props) => {

    const { id } = useParams()

    const classes = useStyles()

    const transformImageUri = uri =>{
        return process.env.NODE_ENV !== 'development' ? 
                        uri
                    :
                        process.env.REACT_APP_BACKEND_URL + uri
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
            <Query query={USER_QUERY} id={id}>
                {({data:{user}})=>{
                    
                    const bgUrl = process.env.NODE_ENV !== 'development' ? 
                                        user.user_bio.cover.url
                                    :
                                        process.env.REACT_APP_BACKEND_URL + user.user_bio.cover.url
                    const avatarUrl = process.env.NODE_ENV !== 'development' ? 
                                            user.avatar.url
                                        :
                                            process.env.REACT_APP_BACKEND_URL + user.avatar.url

                    return <div>
                        <div className={classes.hero} style={{backgroundImage:`url(${bgUrl})`}}>
                            <div className={classes.summary}>
                                <Avatar className={classes.avatar} src={avatarUrl} />
                                <Typography variant='h6' style={{color:'white'}}>
                                    {user.username}
                                </Typography>
                                <Typography style={{color:'white'}}>
                                    {user.title}
                                </Typography>
                                <Typography variant='caption' style={{color:'white'}}>
                                    {user.email}
                                </Typography>
                            </div>
                        </div>
                        <div className={classes.markdown}>
                            <ReactMarkdown
                                source={user.user_bio.details}
                                transformImageUri={transformImageUri}
                                renderers={{
                                    image:renderImage,
                                    text:renderText
                                }}
                            />
                        </div>
                    </div>
                }}
            </Query>
        </div>
     );
}
 
export default User;