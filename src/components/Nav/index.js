import React,{ useState } from 'react';
import Query from '../Query'
import { Link, useLocation } from 'react-router-dom';
import { Toolbar, Button, ButtonGroup, IconButton, Hidden, makeStyles, Typography, fade, Divider, Dialog, DialogTitle } from '@material-ui/core'

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
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
    },
    advertise:{
        position:'fixed',
        zIndex:'99',
        right:15,
        bottom:'50%',
        backgroundColor:'#5ba124',
        color:'#ffffff',
        padding:theme.spacing(0.5,1),
        transform:'rotate(-90deg)',
        transformOrigin:'right',
        cursor:'pointer'
    },
    details:{
        padding:theme.spacing(0,2,2,2)
    },
    homeButton:{
        padding:theme.spacing(1,0,1,1.5),
        marginRight:theme.spacing(1),
        backgroundColor:'#5ba124',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'25px 0 0 25px',
    },
    homeButton1:{
        padding:theme.spacing(1,0,1,1.5),
        marginRight:theme.spacing(1),
        backgroundColor:'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'25px 0 0 25px',
    },
    ads:{
        height:'30vh',
        backgroundColor:'gray',
        width:'50%',
        float:'right'
    }
}))

const Nav = () =>{

    const classes = useStyles()

    const [open, setOpen] = useState(false);

    const { pathname } = useLocation()

    const handleAdvertise = event =>{
        setOpen(true)
    }
    
    const handleClose = () =>{
        setOpen(false)
    }
        
    return (
        <div>
            <Toolbar className={classes.topNav} component='nav' variant='dense'>
                <Hidden xsDown>
                    <div>
                        <IconButton  href='https://www.facebook.com/NILE-Trumpet-Magazine-113588513748029' target='_blank' aria-label='facebook-link'><FacebookIcon style={{color:'#3b5998 '}}/></IconButton>
                        <IconButton  href='https://twitter.com/niletrumpetmag?s=08' target='_blank' aria-label='twitter-link'><TwitterIcon style={{color:'#00acee'}}/></IconButton>
                        <IconButton  href='https://youtu.be/ZSndiJccngs' target='_blank' aria-label='youtube-link'><YouTubeIcon style={{color:'red'}}/></IconButton>
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
                                        <div className={classes.homeButton}>
                                            <HomeIcon style={{color:'white'}} className={classes.homeIcon}/>
                                        </div>
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
                                                            <div className={classes.homeButton1}>
                                                                <HomeIcon style={{color:'#5ba124'}} className={classes.homeIcon}/>
                                                            </div>
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
                                    <div className={classes.ads}>
                                        <Typography align='center' color='textSecondary'>Ads</Typography>
                                    </div>
                                </div>
                        </div>
                }}
            </Query>}
            <div onClick={handleAdvertise} className={classes.advertise}>
                <Typography variant='body2'>Advertise with Us</Typography>
            </div>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle style={{fontSize:'14px'}}>Advertise with us</DialogTitle>
                <Typography className={classes.details}>
                    Let's help your business brand reach corners in the north and wide. Contact <a href='tel:+256789038145'>0789038145</a> Today and book advertising slots on our magazine.
                </Typography>
            </Dialog>
        </div>
    )
}

export default Nav