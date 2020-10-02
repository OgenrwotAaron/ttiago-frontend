import React from 'react';
import { makeStyles, Typography, Grid, List, ListItem, ListItemText } from '@material-ui/core';
import { Helmet } from 'react-helmet'

import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';

const useStyles = makeStyles(theme=>({
    hero:{
        height:'50vh',
        backgroundImage:'url(/images/about.jpg)',
        backgroundPosition:'center',
        backgroundSize:'cover'
    },
    header:{
        height:'100%',
        backgroundColor:'#00000070',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column'
    },
    mission:{
        padding:theme.spacing(4,2)
    },
    vision:{
        padding:theme.spacing(4,2)
    },
    icons:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:theme.spacing(2),
        color:'#5ba024'
    },
    values:{
        padding:theme.spacing(4,2)
    }
}))

const About = (props) => {

    const classes = useStyles()

    const values = [
        {title:'Inspired',body:'As Nile Trumpet team, we do what we love and are connected to something greater than ourselves.'},
        {title:'Authentic',body:'We are genuine to our brand, mission and values. We’re not perfect, and we don’t pretend to be.We are always honest and as transparent as we can be. '},
        {title:'Grateful',body:'We are grateful for each other , our members , and to be part of this movement. We don’t take success for granted. We’re happy to be alive and impact lives.'},
        {title:'Creativity',body:'We believe in doing things not like any other person. There is always that extra mile you and us can go by putting the brain to task.'},
        {title:'Personal Development',body:'We are focused on constantly developing personnel abilities , through learning & mentorship capabilities , which is reflected in the way our customers’ needs are met.'},
        {title:'Integrity and Professionalism',body:'Steadfast adherence to high ethical principles such as truthfulness, fairness, doing what we say we will do, and “speaking forth” about why we do what we do constitute our efforts to show our integrity. We intend to deliver and uphold our vision in accordance with rules , regulations and laws of our profession, industry and country.'},
        {title:'Recognition',body:'Every team member’s , customer’s or partner’s efforts and contributions are rewarded and celebrated by the magazine.'},
        {title:'Reliability',body:'Every team member delivers consistently , as every partner impacts on our quality standards .You can always count on us.'},
        {title:'Together',body:'We are in this together.This is a team effort , we always look out for one another.We have empathy , we know we’re all human, and know we can’t do this alone.'},
        {title:'Tenacious',body:'We never settle. We get things done and we get it done well.Be persistent and knock down walls -literally if you have to.You have our permissions'}
    ]

    return ( 
        <div>
            <Helmet>
                <meta name='description' content='About Nile Trumpet Magazine'/>
                <title>About | Nile Trumpet Magazine</title>
            </Helmet>
            <div className={classes.hero}>
                <div className={classes.header}>
                    <Typography variant='h3' style={{color:'white'}}>About Us</Typography>
                    <Typography variant='body1' style={{color:'white'}} component='i'>Nile Trumpet Magazine | "The Inspirational"</Typography>
                </div>
            </div>
            <div className={classes.mission}>
                <Typography align='center' color='textSecondary' style={{fontWeight:'300'}} variant='h4'>Our Mission</Typography>
                <Typography align='center' variant='body1' color='textSecondary'>
                To bring the best out of writing ,inspire lives and transform the society.
                </Typography>
            </div>
            <div className={classes.vision}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <div className={classes.icons}>
                            <EmojiObjectsOutlinedIcon style={{fontSize:'52px'}}/>
                        </div>
                        <Typography color='textSecondary' variant='h5' style={{fontWeight:'300'}} align='center'>Vision</Typography>
                        <Typography color='textSecondary' align='center' variant='body1'>
                            We envision a world where the culture of writing and creativity is used to impact lives and build societies.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className={classes.icons}>
                            <ExploreOutlinedIcon style={{fontSize:'52px'}}/>
                        </div>
                        <Typography color='textSecondary' variant='h5' style={{fontWeight:'300'}} align='center'>Mission Statement</Typography>
                        <Typography color='textSecondary' align='center' variant='body1'>
                            We aspire to provide credible, reliable, accessible and up-to-date information for community transformation.
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.values}>
                <Typography align='center' variant='h4' color='textSecondary' style={{fontWeight:'300'}}>Our Core Values</Typography>
                <List>
                    {
                        values.map((value,i)=>(
                            <ListItem key={i}>
                                <ListItemText 
                                    primary={value.title}
                                    primaryTypographyProps={{
                                        variant:'h6',
                                        style:{fontWeight:'300'}
                                    }}
                                    secondary={value.body}
                                    secondaryTypographyProps={{
                                        variant:'body1'
                                    }}
                                />
                            </ListItem>
                        ))
                    }
                </List>
            </div>
        </div>
     );
}
 
export default About;