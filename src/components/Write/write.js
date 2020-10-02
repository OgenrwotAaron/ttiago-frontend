import React from 'react';
import { makeStyles, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { Helmet } from 'react-helmet'

const useStyles = makeStyles(theme=>({
    hero:{
       height:'50vh',
        backgroundImage:'url(/images/about.jpg)' ,
        backgroundPosition:'center',
        backgroundAttachment:'fixed',
        backgroundSize:'cover'
    },
    info:{
        backgroundColor:'#00000070',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    details:{
        padding:theme.spacing(4,2)
    }
}))

const Write = (props) => {

    const classes = useStyles()

    const submissions = [
        {   
            title:'1. Business Promotions will not be published.',
            body:'Instead, reveal what inspires and challenges you at work or in your business. Write to encourage and enlighten—not to sell your product.'
        },
        {
            title:'2. How-To Pieces and Reports will not be published.',
            body:'Instead, write about how you learned what you know and then include advice and tips.'
        },
        {
            title:'3. Philosophical Wanderings will not be published.',
            body:'Everyone has philosophical positions, but nobody cares about yours. Instead, tell the story about what led you to that view—but don’t preach.'
        },
        {
            title:'4.  Controversial Topics will not be published.',
            body:'Our purpose is to inspire and guide—not offend.'
        },
        {
            title:'5. Previously Published Articles or Excerpts will not be published.',
            body:'Articles must be original work submitted exclusively for SB publication. Writers may include brief quotes but poorly written or inaccurate quotations will result in rejection. Submissions that include excerpts from your own work will be rejected since we cannot edit published language.'
        },
        {
            title:'6. Poorly written pieces will not be published.',
            body:'ALL submissions should be engaging and pertinent, well organized, free of redundancy, and meticulously edited for structural and punctuation errors. Use the “Control F” function to locate and remove excessive word repetition. Our Editors edit all articles prior to publication. If your feelings are easily hurt, please submit elsewhere—and good luck with that.'
        }
    ]

    const guidelines = [
        'Type manuscript in Times New Roman, 12 font, with 1 inch margins.',
        'Left align the title on the first line and your first and last name on the second.',
        'Left align and single space the article. Double space between paragraphs; don’t indent.',
        'Manuscript should be approximately 600-1200 words.',
        'Manuscript must not be previously published. We hold exclusive rights to what we publish.',
        'Do not submit excerpts from published works, not even your own.',
        'Include a bio of approximately 250 words based on the following suggestions: Education level, career path, passions, talents, hobbies, goals, accomplishments;  Promotional information—if you have a book out or a relevant product;  Contact information—if you wish to provide your website, FB, Instagram, or email.'
    ]

    return ( 
        <div>
            <Helmet>
                <meta name='description' content='Write for us. Nile Trumpet Magazine welcomes nonfiction, personal anecdotes that inspire and guide readers to do things differently, inspire others and promote the culture of writing to make the world a better place. We also publish fiction that contains these elements. Consider the following topics: Health; Politics; Luo Content; Poems; Fashion; Sports; Campus jazz; Culture Education; Family, and Relationships; Happiness; Spirituality ;Passion, Business, and Employment.' />
                <title>Write For Us | Nile Trumpet</title>
            </Helmet>
            <div className={classes.hero}>
                <div className={classes.info}>
                    <Typography variant='h3' style={{fontWeight:'300', color:'white'}}>
                        Write For Us
                    </Typography>
                    <Typography component='i' style={{color:'white'}}>
                        NILE Trumpet Magazine | "The Inspirational"
                    </Typography>
                </div>
            </div>
            <div className={classes.details}>
                <Typography variant='h5' style={{fontWeight:'300'}}>CALL FOR MANUSCRIPTS</Typography>
                <Typography color='textSecondary'>
                    Nile Trumpet  Magazine welcomes nonfiction, personal anecdotes that inspire and guide readers to do things differently, inspire others and promote the culture of writing to make the world a better place. We also publish fiction that contains these elements. Consider the following topics:
                    Health; Politics; Luo Content; Poems;  Fashion; Sports; Campus jazz; Culture  Education; Family, and Relationships; Happiness; Spirituality ;Passion, Business, and Employment.
                </Typography>
                <br/>
                <Typography variant='h5' style={{fontWeight:'300'}}>DOOMED SUBMISSIONS:</Typography>
                <List>
                    {
                        submissions.map((submission,i)=>(
                            <ListItem key={i}>
                                <ListItemText
                                    primary={submission.title}
                                    primaryTypographyProps={{
                                        style:{
                                            fontWeight:'300'
                                        }
                                    }}
                                    secondary={submission.body}
                                />
                            </ListItem>
                        ))
                    }
                </List>
                <br/>
                <Typography variant='h5' style={{fontWeight:'300'}}>SUBMISSION GUIDELINES:</Typography>
                <ol>{
                        guidelines.map((guideline,i)=>(
                            <li key={i}>
                                <Typography color='textSecondary'>
                                    {guideline.replace(/\n/g,'<br />')}
                                </Typography>
                            </li>
                        ))
                    }
                    <li>
                        <Typography color='textSecondary'>
                            Also attach a headshot picture (directly from a camera or cell phone—not from Facebook).Attach ALL 3 ITEMS to an email and send to <a href='mailto:ntrumpeteditorial@gmail.com'>ntrumpeteditorial@gmail.com</a>:-<br/> - MANUSCRIPT (word.doc) <br/> - BIO (word.doc) <br/> - HEADSHOT Submitting to Editorial indicates full agreement with all terms and conditions of publication.
                        </Typography>
                    </li>
                </ol>
            </div>
        </div>
     );
}
 
export default Write;