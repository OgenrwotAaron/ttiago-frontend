import React from 'react';
import Query from '../Query'
import { Link, useLocation } from 'react-router-dom';
import { Toolbar, Button, ButtonGroup, IconButton, Hidden, makeStyles, Typography, fade, Divider } from '@material-ui/core'

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import HomeIcon from '@material-ui/icons/Home'
import ArrowDropDownCircleIcon from '@material-ui/icons/KeyboardArrowDown'

import ReactMoment from 'react-moment'
import TypeWriter from 'typewriter-effect'

import CATEGORIES_QUERY from '../../queries/category/categories';
import COVER_QUERY from '../../queries/cover/cover';
import ARTICLES_QUERY from '../../queries/article/articles';

const useStyles = makeStyles(theme=>({
    topNav:{
        justifyContent:'space-between',
        padding:0,
    },
    link:{
        padding:theme.spacing(1),
        flexShrink:0
    },
    toolbarSecondary: {
        overflowX: 'auto',
    },
    title:{
        flexGrow:1,
        fontWeight:'bold'
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        width:'20%',
        filter:'brightness(1.5)'
    },
    hero:{
        height:'100vh',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        margin:theme.spacing(0,-1),
        backgroundPosition:'center',
        backgroundAttachment:'fixed'
    },
    overlay:{
        backgroundColor:'#00000069',
        height:'100vh'
    },
    topStory:{
        display:'flex',
        alignItems:'center',
        padding:theme.spacing(2)
    },
    headline:{
        backgroundColor:'#5ba124',
        color:'white',
        boxShadow:'0 0 0 black',
        borderRadius:'25px 0 0 25px',
        marginRight:5
    },
    homeIcon:{
        margin:theme.spacing(0,1,0,0),
        color:'whitesmoke'
    },
    more:{
        position:'absolute',
        bottom:10,
        right:'50%'
    },
    moreIcon:{
        fontSize:72,
        color:'whitesmoke',
    }
}))

const Nav = () =>{

    const classes = useStyles()

    const { pathname } = useLocation()

    return (
        <div>
            <Toolbar className={classes.topNav} component='nav' variant='dense'>
                <Hidden xsDown>
                    <div>
                        <IconButton aria-label='facebook-link'><FacebookIcon style={{color:'#5ba124'}}/></IconButton>
                        <IconButton aria-label='twitter-link'><TwitterIcon style={{color:'#5ba124'}}/></IconButton>
                        <IconButton aria-label='instagram-link'><InstagramIcon style={{color:'#5ba124'}}/></IconButton>
                    </div>
                    <Typography style={{color:'#5ba124'}}>
                        <ReactMoment format='Do | MMM | YYYY'>{new Date()}</ReactMoment>
                    </Typography>
                </Hidden>
                <ButtonGroup variant='text'>
                    <Button style={{color:'#5ba124'}} href='/team'>Our Team</Button>
                    <Button style={{color:'#5ba124'}} href='/about' >About</Button>
                    <Button style={{color:'#5ba124'}} href='#subscribe' >Subscribe</Button>
                    <Button style={{color:'#5ba124'}} href='/contact' >Contact</Button>
                    <Button style={{color:'#5ba124'}} href='/write' >Write for us</Button>
                </ButtonGroup>
            </Toolbar>
            <Divider/>
            {
                pathname !== '/' && 
                <Query query={CATEGORIES_QUERY} id={null}>
                    {({ data: { categories } }) => {
                        return (
                            <div>
                                <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                                    <Link to='/'>
                                        <HomeIcon style={{color:'#0000008a'}} className={classes.homeIcon}/>
                                    </Link>
                                    <Link to='/news'>
                                        <Typography color='textSecondary'>News</Typography>
                                    </Link>
                                    {categories.map(category=>(
                                        <Link 
                                            key={category.id}
                                            to={`/category/${category.id}`}
                                            variant='body2'
                                            className={classes.link}
                                        >
                                            <Typography color='textSecondary'>{category.name}</Typography>
                                        </Link>
                                    ))}
                                </Toolbar>
                            </div>
                        )
                    }}
                </Query>
            }
            {pathname === '/' && <Query query={COVER_QUERY}>
                {({data:{covers}}) => {
                    const imageUrl = process.env.NODE_ENV !== 'development' ?   
                                        covers[covers.length-1].image.url
                                    :
                                        process.env.REACT_APP_BACKEND_URL + covers[covers.length-1].image.url
                    
                    return <div style={{backgroundImage:`url(${imageUrl})`}} className={classes.hero}>
                                <div className={classes.overlay}>
                                    <Query query={CATEGORIES_QUERY} id={null}>
                                        {({ data: { categories } }) => {
                                            return (
                                                <div>
                                                    <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                                                        <Link to='/'>
                                                            <HomeIcon className={classes.homeIcon}/>
                                                        </Link>
                                                        <Link to='/news'>
                                                            <Typography style={{color:'whitesmoke'}}>News</Typography>
                                                        </Link>
                                                        {categories.map(category=>(
                                                            <Link 
                                                                key={category.id}
                                                                to={`/category/${category.id}`}
                                                                variant='body2'
                                                                className={classes.link}
                                                            >
                                                                <Typography style={{color:'whitesmoke'}}>{category.name}</Typography>
                                                            </Link>
                                                        ))}
                                                    </Toolbar>
                                                </div>
                                            )
                                        }}
                                    </Query>
                                    <Query query={ARTICLES_QUERY}>
                                        {({data:{articles}})=>{
                                            return  <div className={classes.topStory}>
                                                        <Button elevation={0} variant='contained' className={classes.headline}>Headlines</Button>
                                                        <Typography style={{color:'whitesmoke'}} component='span'>
                                                            <TypeWriter
                                                                options={{
                                                                    strings:articles.map(article=>article.title),
                                                                    autoStart: true,
                                                                    loop: true,
                                                                }}
                                                            />
                                                        </Typography>
                                                    </div>
                                        }}
                                    </Query>
                                    <IconButton href='#featured' className={classes.more}>
                                        <ArrowDropDownCircleIcon className={classes.moreIcon} color='primary'/>
                                    </IconButton>
                                </div>
                        </div>
                }}
            </Query>}
        </div>
    )
}

export default Nav