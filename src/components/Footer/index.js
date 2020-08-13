import React from 'react';
import { makeStyles, TextField, InputAdornment, Paper, Typography, Grid, List, ListItem, ListItemText, IconButton } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles(theme=>({
    root:{
        width:'100%',
        marginTop:theme.spacing(4)
    },
    subscribe:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundImage:'url(/images/footer.jpg)',
        backgroundSize:'contain',
        backgroundAttachment:'fixed'
    },
    input:{
        padding:theme.spacing(6,4),
        backgroundColor:'#000000b0',
    },
    details:{
        padding:theme.spacing(4,2)
    }
}))

const Footer = () => {

    const classes = useStyles()

    return ( 
        <div className={classes.root}>
            <div className={classes.subscribe} id='subscribe'>
                <Grid container spacing={2} className={classes.input}>
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
                    <Typography variant='h4' component='b'>
                        TRUMPET
                    </Typography>
                    <Typography variant='body1' color='textSecondary'>
                        MAGAZINE
                    </Typography>
                    <Typography variant='body1' color='textSecondary'>
                        support@thetrumpet.com
                    </Typography>
                </Grid>
                <Grid item sm={5}>
                    <Typography style={{fontWeight:'bold'}} component='b'>PAGES</Typography>
                    <List component='nav'>
                        <ListItem button>
                            <ListItemText primaryTypographyProps={{color:'textSecondary'}} primary='Authors' />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primaryTypographyProps={{color:'textSecondary'}} primary='About' />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primaryTypographyProps={{color:'textSecondary'}} primary='Sign In' />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primaryTypographyProps={{color:'textSecondary'}} primary='Subscribe' />
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
                    </div>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default Footer;