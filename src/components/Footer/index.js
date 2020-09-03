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
import InstagramIcon from '@material-ui/icons/Instagram';
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
    },
    ads:{
        height:'15vh',
        backgroundColor:'white',
        padding:theme.spacing(2,0)
    },
    adContent:{
        backgroundColor:'grey',
        height:'100%'
    }
}))

const Footer = props => {

    const classes = useStyles()
    const { ads } = props

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
            <div className={classes.ads}>
                <div className={classes.adContent}>
                    {
                        ads.filter(ad=>ad.position === 'bottom1').map(ad=>(
                            <a key={ad.id} href={ad.url === null ? "/":`${ad.url}`}>
                                <div
                                    style={{
                                        backgroundImage:`url(${ad.adImage.url})`,
                                        height:'100%',
                                        backgroundSize:'contain'
                                    }}
                                />
                            </a>
                        ))
                    }
                </div>
            </div>
            <div className={classes.ads}>
                <div className={classes.adContent}>
                    {
                        ads.filter(ad=>ad.position === 'bottom2').map(ad=>(
                            <a key={ad.id} href={ad.url === null ? "/":`${ad.url}`}>
                                <div
                                    style={{
                                        backgroundImage:`url(${ad.adImage.url})`,
                                        height:'100%',
                                        backgroundSize:'contain'
                                    }}
                                />
                            </a>
                        ))
                    }
                </div>
            </div>
            <Grid container spacing={1} className={classes.details}>
                <Grid item sm={4}>
                    <Typography style={{fontWeight:'bold'}} component='b'>NILE TRUMPET</Typography>
                    <Link to='/'>
                        <img
                            src='/favicon.ico'
                            alt='footer'
                            style={{width:'80%'}}
                        />
                    </Link>
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
                        {/* <ListItem button>
                            <Link to='#subscribe'>
                                <ListItemText primaryTypographyProps={{color:'textSecondary'}} primary='Subscribe' />
                            </Link>
                        </ListItem> */}
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
                            <PhoneIcon fontSize='small'/>
                        </IconButton>
                        <IconButton href='mailto:niletrumpetmagazine@gmail.com' >
                            <EmailIcon fontSize='small' style={{color:'#D44638'}}/>
                        </IconButton>
                        <IconButton href='https://www.facebook.com/NILE-Trumpet-Magazine-113588513748029' target='_blank'>
                            <FacebookIcon fontSize='small' style={{color:'#3b5998 '}}/>
                        </IconButton>
                        <IconButton href='https://twitter.com/niletrumpetmag?s=08' target='_blank'>
                            <TwitterIcon fontSize='small' style={{color:'#00acee'}}/>
                        </IconButton>
                        <IconButton href='https://www.youtube.com/channel/UCn64UEDFUq5m3IPfvVsppsA' target='_blank'>
                            <YouTubeIcon fontSize='small' style={{color:'red'}}/>
                        </IconButton>
                        <IconButton href="intent://send/+256703229038#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end">
                            <WhatsAppIcon fontSize='small' style={{color:'#25D366'}}/>
                        </IconButton>
                        <IconButton href="#">
                            <InstagramIcon fontSize='small' style={{color:'orange'}}/>
                        </IconButton>
                    </div>
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