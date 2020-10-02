import React from 'react';
import { useParams } from 'react-router-dom';
import Query from '../../components/Query';
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { Helmet } from 'react-helmet'

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import ARTICLE_QUERY from '../../queries/article/article';
import CATEGORY_QUERY from '../../queries/category/articles'
import { makeStyles, Typography, Avatar, Grid } from '@material-ui/core';
import CategoryCard from '../../components/CategoryCard';

const useStyles = makeStyles(theme=>({
    hero:{
        height:'80vh',
        backgroundSize:'cover',
        backgroundPosition:'bottom'
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
        color:'white',
        textAlign:'center'
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
    },
    articleText:{
        color:theme.palette.text.secondary
    }
}))

const Article = props => {

    const classes = useStyles();

    let { id } = useParams()


    const handleImageUri = uri =>{
        const imageUrl = process.env.NODE_ENV !== 'development' ? 
                        uri
                    :
                        process.env.REACT_APP_BACKEND_URL + uri;
        return imageUrl;
    }

    const articleImage = props =>{

	let extension = props.alt.split('.')[props.alt.split('.').length-1];
        if(extension === 'jpg' || extension === 'jpeg' || extension === 'png' || extension === 'gif' || extension === 'svg' || extension === 'ico'){
            return (
                <img {...props} alt={props.alt} style={{maxWidth:'100%'}} />
            )
        }else{
            return (
                <video width='100%' controls>
                    <source src={props.src}/>
                </video>
            )
        }
        
    }

    const articleText = props =>(
        <span className={classes.articleText}>
            {props.children}
        </span>
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
                        <Helmet>
                            <meta charSet="utf-8" />
                            <title>{article.title}</title>
                            <meta name="title" content={article.title}/>
                            <meta name="description" content={article.content}/>
                            <meta name="image" content={imageUrl}/>

                            <meta property="og:type" content="website"/>
                            <meta property="og:url" content={`http://${window.location.host+props.location.pathname}/article/${article.id}`}/>
                            <meta property="og:title" content={article.title}/>
                            <meta property="og:description" content={article.content}/>
                            <meta property="og:image" content={imageUrl}/>
                            <meta property="fb:app_id" content='282357982917696' />

                            <meta property="twitter:card" content="summary_large_image"/>
                            <meta property="twitter:url" content={`http://${window.location.host+props.location.pathname}/article/${article.id}`}/>
                            <meta property="twitter:title" content={article.title}/>
                            <meta property="twitter:description" content={article.content}/>
                            <meta property="twitter:image" content={imageUrl}/>
                        </Helmet>
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
                                <FacebookShareButton
                                    url={`http://${window.location.host+props.location.pathname}`}
                                >
                                    <FacebookIcon/>
                                </FacebookShareButton>
                                <TwitterShareButton
                                    url={`http://${window.location.host+props.location.pathname}`}
                                >
                                    <TwitterIcon/>
                                </TwitterShareButton>
                                <WhatsappShareButton
                                     url={window.location.host+props.location.pathname}
                                     title={article.title}
                                     separator=":: "
                                >
                                    <WhatsAppIcon/>
                                </WhatsappShareButton>
                            </div>
                            <div className={classes.author}>
                                <Avatar src={avatarUrl} className={classes.avatar}/>
                                <Typography style={{fontWeight:'bold'}}>
                                    {article.author.user_name}
                                </Typography>
                                <Typography color='textSecondary' variant='caption'>
                                    <Moment format='MMM Do YYYY' >{article.published_at}</Moment>
                                </Typography>
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
