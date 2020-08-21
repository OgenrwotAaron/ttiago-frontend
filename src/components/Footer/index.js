import React from 'react';
import { makeStyles, TextField, InputAdornment, Paper, Typography, Grid, List, ListItem, ListItemText, IconButton } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme=>({
    root:{
        marginTop:theme.spacing(4)
    },
    subscribe:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundImage:'url(/images/footer.jpg)',
        backgroundSize:'cover',
        backgroundAttachment:'fixed',
        backgroundRepeat:'no-repeat'
    },
    input:{
        padding:theme.spacing(6,4),
        backgroundColor:'#000000b0',
    },
    details:{
        padding:theme.spacing(4,2,2,2)
    },
    copy:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:theme.spacing(2)
    }
}))

const Footer = () => {

    const classes = useStyles()

    return ( 
        <div className={classes.root}>
            <div className={classes.subscribe} id='subscribe'>
                <Grid container spacing={1} className={classes.input}>
                    <Grid item xs={12} sm={6}>
                        <Paper>
                            <TextField
                                label='Email'
                                variant='outlined'
                                style={{width:'100%'}}
                                InputProps={{
                                    endAdornment:(
                                        <InputAdornment position='end'>
                                            <MailOutlineIcon/>
                                        </InputAdornment>
                                    )
                                }}
                            /> 
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography style={{color:'white'}} component='b' variant='h5'>Subscribe To Our Newsletter</Typography>
                    </Grid>
                </Grid>
            </div>
            <Grid container spacing={2} className={classes.details}>
                <Grid item sm={4}>
                    <Typography style={{fontWeight:'bold'}} component='b'>NILE TRUMPET</Typography>
                    <img
                        src='/favicon.ico'
                        alt='footer'
                        style={{width:'80%'}}
                    />
                </Grid>
                <Grid item sm={5}>
                    <Typography style={{fontWeight:'bold'}} component='b'>PAGES</Typography>
                    <List component='nav'>
                        <ListItem button>
                            <Link to='/authors'>
                                <ListItemText primaryTypographyProps={{color:'textSecondary'}} primary='Editors' />
                            </Link>
                        </ListItem>
                        <ListItem button>
                            <Link to='/about'>
                                <ListItemText primaryTypographyProps={{color:'textSecondary'}} primary='About' />
                            </Link>
                        </ListItem>
                        <ListItem button>
                            <Link to='#subscribe'>
                                <ListItemText primaryTypographyProps={{color:'textSecondary'}} primary='Subscribe' />
                            </Link>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item sm={3}>
                    <Typography style={{fontWeight:'bold'}} component='b'>CONTACTS</Typography>
                    <div>
                        <IconButton>
                            <FacebookIcon fontSize='large' />
                        </IconButton>
                        <IconButton>
                            <TwitterIcon fontSize='large'/>
                        </IconButton>
                        <IconButton>
                            <InstagramIcon fontSize='large'/>
                        </IconButton>
                        <IconButton>
                            <YouTubeIcon fontSize='large' />
                        </IconButton>
                    </div>
                    <img
                        alt='contact'
                        src='/images/contact.svg'
                        width='100%'
                    />
                </Grid>
            </Grid>
            <div className={classes.copy}>
                <Typography color='textSecondary' variant='caption'>
                    &copy; Copyright {new Date().getFullYear()}, All rights reserved | Powered By The Nile Trumpet
                </Typography>
            </div>
        </div>
     );
}
 
export default Footer;