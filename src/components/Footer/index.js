import React from 'react';
import { makeStyles, 
    //TextField, 
    //InputAdornment, 
    //Paper, 
    Typography, 
    Grid, 
    List, 
    ListItem, 
    ListItemText, 
    IconButton } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import YouTubeIcon from '@material-ui/icons/YouTube';
//import MailOutlineIcon from '@material-ui/icons/MailOutline';

import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme=>({
    root:{
        marginTop:theme.spacing(4),
        backgroundColor:'#f0ffff'
    },
    subscribe:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundImage:'url(/images/footer.jpg)',
        backgroundSize:'cover',
        backgroundAttachment:'fixed',
        backgroundRepeat:'no-repeat',
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
        padding:theme.spacing(2),
        backgroundColor:'#5ba124'
    }
}))

const Footer = () => {

    const classes = useStyles()

    //const [subscribe, setSubscribe] = useState('');

    // const handleChange = event =>{
    //     event.preventDefault()
    //     setSubscribe(event.target.value)
    // }

    // const handleSubscribe = () => {
    //     setSubscribe('')
    //     console.log(subscribe)
    // }

    return ( 
        <div className={classes.root}>
            <div className={classes.subscribe} id='subscribe'>
                {/* <Grid container spacing={1} className={classes.input}>
                    <Grid item xs={12} sm={6}>
                        <Paper>
                            <TextField
                                label='Email'
                                variant='outlined'
                                style={{width:'100%'}}
                                value={subscribe}
                                onChange={handleChange}
                                InputProps={{
                                    endAdornment:(
                                        <InputAdornment position='end'>
                                            <IconButton disabled={subscribe.length<1} onClick={handleSubscribe}>
                                                <MailOutlineIcon/>
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            /> 
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography style={{color:'white'}} align='center' component='b' variant='h5'>Subscribe To Our Newsletter</Typography>
                    </Grid>
                </Grid> */}
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
                                <ListItemText primaryTypographyProps={{color:'textSecondary'}} primary='Our Team' />
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
                        <ListItem button>
                            <Link to='/contact'>
                                <ListItemText primaryTypographyProps={{color:'textSecondary'}} primary='Contact' />
                            </Link>
                        </ListItem>
                        <ListItem button>
                            <Link to='/write'>
                                <ListItemText primaryTypographyProps={{color:'textSecondary'}} primary='Write For Us' />
                            </Link>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item sm={3}>
                    <Typography style={{fontWeight:'bold'}} component='b'>CONTACTS</Typography>
                    <div>
                    <IconButton href='tel:+256789101547'>
                        <PhoneIcon/>
                    </IconButton>
                    <IconButton href='mailto:niletrumpetmagazine@gmail.com' >
                        <EmailIcon/>
                    </IconButton>
                    <IconButton href='https://www.facebook.com/NILE-Trumpet-Magazine-113588513748029' target='_blank'>
                        <FacebookIcon/>
                    </IconButton>
                    <IconButton href='https://twitter.com/niletrumpetmag?s=08' target='_blank'>
                        <TwitterIcon/>
                    </IconButton>
                    <IconButton href='https://youtu.be/ZSndiJccngs' target='_blank'>
                        <YouTubeIcon/>
                    </IconButton>
                    <IconButton href='whatsapp:+256703229038'>
                        <WhatsAppIcon/>
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
                <Typography style={{color:'white'}} variant='caption'>
                    &copy; Copyright {new Date().getFullYear()}, All rights reserved | Powered By The Nile Trumpet
                </Typography>
            </div>
        </div>
     );
}
 
export default Footer;