import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
    hero:{
        height:'50vh'
    },
    header:{
        height:'100%',
        backgroundColor:'#00000070',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column'
    }
}))

const About = (props) => {

    const classes = useStyles()

    return ( 
        <div>
            <div className={classes.hero}>
                <div className={classes.header}>
                    <Typography variant='h3' style={{color:'white'}}>About Us</Typography>
                    <Typography variant='body1' style={{color:'white'}} component='i'>Nile Trumpet Magazine | "The Inspirational"</Typography>
                </div>
            </div>
        </div>
     );
}
 
export default About;