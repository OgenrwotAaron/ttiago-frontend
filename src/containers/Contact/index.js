import React, { useState } from 'react';
import { Grid, Typography, makeStyles, IconButton, TextField, Button, Snackbar } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import YoutubeIcon from '@material-ui/icons/YouTube';
import { Alert } from '@material-ui/lab';
import { Helmet } from 'react-helmet'

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
    },
    contactUs:{
        display:'flex',
        justifyContent:'space-around'
    },
    contactForm:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        background: 'linear-gradient(145deg, #ffffff, #e6e6e6)',
        boxShadow:  '20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff',
        padding:theme.spacing(2),
        borderRadius:25
    },
    textInput:{
        margin:theme.spacing(1)
    },
    button:{
        backgroundColor:'#5ba024',
        color:'white',
        margin:theme.spacing(1)
    }
}))

const Contact = props => {

    const classes = useStyles()

    const [formData, setFormData] = useState({
        fullname:'',
        email:'',
        subject:'',
        message:''
    });
    const [results, setResults] = useState({
        success:false,
        error:false
    });

    const handleChange = event =>{
        event.preventDefault()
        setFormData({
            ...formData,
            [event.target.name]:event.target.value
        })
    }

    const handleSend = event =>{
        event.preventDefault()
        //nodeMailer
    }

    const handleClose = event =>{
        setResults({
            ...!results
        })
    }

    return ( 
        <div className={classes.root}>
            <Helmet>
                <meta name='description' content='Contact Nile Trumpet Magazine. Hit us up via email, phone, or our social media handles'/>
                <title>Contact | Nile Trumpet</title>
            </Helmet>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Typography style={{fontWeight:'bold'}} variant='h2'>
                        Let's do something amazing
                    </Typography>
                    <div className={classes.icons}>
                        <div>
                            <IconButton href='tel:+256789101547'>
                                <PhoneIcon/>
                            </IconButton>
                            <Typography component='span' color='textSecondary'> +256789101547</Typography>
                        </div>
                        <div>
                            <IconButton href='mailto:niletrumpetmagazine@gmail.com' >
                                <EmailIcon style={{color:'#D44638'}}/>
                            </IconButton>
                            <Typography component='span' color='textSecondary' > niletrumpetmagazine@gmail.com</Typography>
                        </div>
                        <div>
                            <IconButton href='https://www.facebook.com/NILE-Trumpet-Magazine-113588513748029' target='_blank'>
                                <FacebookIcon style={{color:'#3b5998 '}}/>
                            </IconButton>
                            <Typography component='span' color='textSecondary' > NILE Trumpet Magazine</Typography>
                        </div>
                        <div>
                            <IconButton  href='https://twitter.com/niletrumpetmag?s=08' target='_blank'>
                                <TwitterIcon style={{color:'#00acee'}}/>
                            </IconButton>
                            <Typography component='span' color='textSecondary' > @niletrumpetmag</Typography>
                        </div>
                        <div>
                            <IconButton href='https://youtu.be/ZSndiJccngs' target='_blank'>
                                <YoutubeIcon style={{color:'red'}}/>
                            </IconButton>
                            <Typography component='span' color='textSecondary' > NILE Trumpet MAgazine</Typography>
                        </div>
                        <div>
                            <IconButton href="intent://send/+256703229038#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end">
                                <WhatsAppIcon style={{color:'#25D366'}}/>
                            </IconButton>
                            <Typography component='span' color='textSecondary' > +256703229038</Typography>
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
            <div className={classes.contactUs}>
                <form onSubmit={handleSend} className={classes.contactForm}>
                    <Typography align='center' color='textPrimary' variant='h5'>Message Us</Typography>
                    <TextField
                        onChange={handleChange}
                        className={classes.textInput}
                        name='fullname'
                        label='FullName'
                        variant='outlined'
                        required
                        type='text'
                    />
                    <TextField
                        onChange={handleChange}
                        className={classes.textInput}
                        name='email'
                        label='Email'
                        variant='outlined'
                        required
                        type='email'
                    />
                    <TextField
                        onChange={handleChange}
                        className={classes.textInput}
                        name='subject'
                        label='Subject'
                        variant='outlined'
                        required
                        type='text'
                    />
                    <TextField
                        onChange={handleChange}
                        className={classes.textInput}
                        name='message'
                        label='Message'
                        variant='outlined'
                        required
                        type='text'
                        multiline
                        rows={4}
                        rowsMax={6}
                    />
                    <Button type='submit' className={classes.button} variant='contained'>Send</Button>
                </form>
            </div>
            <Snackbar open={results.success} onClose={handleClose} autoHideDuration={4000}>
                <Alert variant='filled' severity='success' onClose={handleClose}>
                    Message Sent Successfully
                </Alert>
            </Snackbar>
            <Snackbar open={results.error} onClose={handleClose} autoHideDuration={4000}>
                <Alert variant='filled' severity='error' onClose={handleClose}>
                    Message Not Sent! Try again later.
                </Alert>
            </Snackbar>
        </div>
     );
}
 
export default Contact;