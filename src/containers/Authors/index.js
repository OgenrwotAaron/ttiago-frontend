import React from 'react';
import { Typography, Grid, makeStyles } from '@material-ui/core';
import Query from '../../components/Query';

import TEAMS_QUERY from '../../queries/team/team';
import AuthorCard from '../../components/AuthorCard';

const useStyles = makeStyles(theme=>({
    root:{
        padding:theme.spacing(2,4)
    }
}))

const Authors = (props) => {

    const classes = useStyles()

    return ( 
        <div className={classes.root}>
            <Typography align='center' style={{padding:'25px', fontWeight:'300'}} color='textSecondary' variant='h3'>Our Team</Typography>
            <Grid container spacing={2}>
                <Query query={TEAMS_QUERY}>
                    {({data:{users}})=>{
                        return [...users].sort((a,b)=>a.id-b.id).map((user,i)=>(
                            <Grid item xs={12} sm={6} md={4} key={i}>
                                <AuthorCard user={user} />
                            </Grid>
                        ))
                    }}
                </Query>
            </Grid>
        </div>
     );
}
 
export default Authors;