import React from 'react';
import Query from '../Query'
import { Link } from 'react-router-dom';
import { Toolbar, Button, ButtonGroup, IconButton, Hidden, makeStyles, Typography, InputBase, fade, Divider } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import CATEGORIES_QUERY from '../../queries/category/categories';

const useStyles = makeStyles(theme=>({
    topNav:{
        justifyContent:'space-between',
        padding:0
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
}))

const Nav = () =>{

    const classes = useStyles()

    return (
        <div>
            <Toolbar className={classes.topNav} component='nav' variant='dense'>
                <Hidden xsDown>
                    <div>
                        <IconButton aria-label='facebook-link'><FacebookIcon/></IconButton>
                        <IconButton aria-label='twitter-link'><TwitterIcon/></IconButton>
                        <IconButton aria-label='instagram-link'><InstagramIcon/></IconButton>
                    </div>
                </Hidden>
                <ButtonGroup variant='text'>
                    <Button>Authors</Button>
                    <Button>About</Button>
                    <Button>SignIn</Button>
                    <Button>Subscribe</Button>
                </ButtonGroup>
            </Toolbar>
            <Divider/>
            <Toolbar>
                <Typography className={classes.title} variant='h4'>
                    TRUMPET
                    <Typography component='span' variant='body2'>
                        Magazine
                    </Typography>
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon/>
                    </div>
                    <InputBase
                        placeholder='Search...'
                        classes={{
                            root: classes.inputRoot,
                            input:classes.inputInput
                        }}
                        inputProps = {{ 'aria-label':'search'}}
                    />
                </div>
                
            </Toolbar>
            <Query query={CATEGORIES_QUERY} id={null}>
                {({ data: { categories } }) => {
                    return (
                        <div>
                            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                                <Link to='/'>
                                    <Typography color='textSecondary'>Home</Typography>
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
        </div>
    )
}

export default Nav