import React from 'react';
import { useParams } from 'react-router-dom';
import Query from '../../components/Query';
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import ARTICLE_QUERY from '../../queries/article/article';
import CATEGORY_QUERY from '../../queries/category/articles'
import { makeStyles, Typography, IconButton, Avatar, Grid } from '@material-ui/core';
import CategoryCard from '../../components/CategoryCard';

const useStyles = makeStyles(theme=>({
    hero:{
        height:'80vh',
        backgroundSize:'cover'
    },
    heroDrop:{
        backgroundColor:'#00000050',
        width:'100%',
        height:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        color:'white'
    },
    articleBody:{
        padding:theme.spacing(2,5),
    },
    icons:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:theme.spacing(2)
    },
    share:{
        marginTop:theme.spacing(4)
    },
    author:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-evenly',
        margin:theme.spacing(4)
    },
    avatar:{
        width:theme.spacing(15),
        height:theme.spacing(15),
        margin:theme.spacing(2)
    },
    header:{
        padding:theme.spacing(0,0,4,0)
    },
    related:{
        marginBottom:theme.spacing(4)
    }
}))

const Article = () => {

    const classes = useStyles();

    let { id } = useParams()

    const handleImageUri = uri =>{
        const imageUrl = process.env.NODE_ENV !== 'development' ? 
                        uri
                    :
                        process.env.REACT_APP_BACKEND_URL + uri;
        return imageUrl;
    }

    const articleImage = props =>(
        <img {...props} alt={props.alt} style={{maxWidth:'100%'}} />
    )

    const articleText = props =>(
        <Typography color='textSecondary' component='span'>
            {props.children}
        </Typography>
    )

    return ( 
        <Query query={ARTICLE_QUERY} id={id}>
            {({ data: { article} }) => {
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
                        <div className={classes.hero} style={{backgroundImage:`url(${imageUrl})`}}>
                            <div className={classes.heroDrop}>
                                 <Typography className={classes.title} variant='h3'>{article.title}</Typography>
                            </div>
                        </div>

                        <div className={classes.articleBody}>
                            <ReactMarkdown 
                                renderers={{
                                    image:articleImage,
                                    text:articleText
                                }}
                                transformImageUri={handleImageUri} 
                                source={article.content} 
                            />
                            <Typography className={classes.share} color='textSecondary' align='center'>Share this Article</Typography>
                            <div className={classes.icons}>
                                <IconButton aria-label='facebook-link'><FacebookIcon/></IconButton>
                                <IconButton aria-label='twitter-link'><TwitterIcon/></IconButton>
                                <IconButton aria-label='instagram-link'><InstagramIcon/></IconButton>
                            </div>
                            <div className={classes.author}>
                                <Avatar src={avatarUrl} className={classes.avatar}/>
                                <Typography style={{fontWeight:'bold'}}>
                                    {article.author.user_name}
                                </Typography>
                                <Typography color='textSecondary' variant='caption'>
                                    <Moment format='MMM Do YYYY' >{article.published_at}</Moment>
                                </Typography>
                                <div className={classes.icons}>
                                    <IconButton aria-label='facebook-link'><FacebookIcon fontSize='small' color='primary'/></IconButton>
                                    <IconButton aria-label='twitter-link'><TwitterIcon fontSize='small' color='primary'/></IconButton>
                                    <IconButton aria-label='instagram-link'><InstagramIcon fontSize='small' color='primary'/></IconButton>
                                </div>
                            </div>
                        </div>
                        <div className={classes.related}>
                            <Typography align='center' className={classes.header} variant='h5'>Related Articles</Typography>
                            <Grid container spacing={2}>
                                <Query query={CATEGORY_QUERY} id={article.category.id}>
                                    {({data:{category:{articles}}})=>{
                                        return articles.filter(item=>item.id!==article.id).map(article=>(
                                            <Grid item xs={12} sm={6} md={4} key={article.id}>
                                                <CategoryCard article={article}/>
                                            </Grid>
                                        ))
                                    }}
                                </Query>
                            </Grid>
                        </div>
                    </div>
                )
            }}
        </Query>
     );
}
 
export default Article;