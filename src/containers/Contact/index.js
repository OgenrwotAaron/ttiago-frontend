import React from 'react';
import { Grid, Typography, makeStyles, IconButton } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles(theme=>({
    root:{
        padding:theme.spacing(5)
    },
    contactImage:{
        width:'100%'
    },

    icons:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start'
    }
}))

const Contact = props => {

    const classes = useStyles()

    return ( 
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Typography style={{fontWeight:'bold'}} variant='h2'>
                        Let's do something amazing
                    </Typography>
                    <div className={classes.icons}>
                        <div>
                            <IconButton>
                                <PhoneIcon/>
                            </IconButton>
                            <Typography component='span' color='textSecondary'> +256789001983</Typography>
                        </div>
                        <div>
                            <IconButton>
                                <EmailIcon/>
                            </IconButton>
                            <Typography component='span' color='textSecondary' >+256789001983</Typography>
                        </div>
                        <div>
                            <IconButton>
                                <FacebookIcon/>
                            </IconButton>
                            <Typography component='span' color='textSecondary' >+256789001983</Typography>
                        </div>
                        <div>
                            <IconButton>
                                <TwitterIcon/>
                            </IconButton>
                            <Typography component='span' color='textSecondary' >+256789001983</Typography>
                        </div>
                        <div>
                            <IconButton>
                                <InstagramIcon/>
                            </IconButton>
                            <Typography component='span' color='textSecondary' >+256789001983</Typography>
                        </div>
                        
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img
                        className={classes.contactImage}
                        src='/images/contact.svg'
                        alt='contact'
                    />
                </Grid>
            </Grid>
        </div>
     );
}
 
export default Contact;