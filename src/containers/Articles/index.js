import React, { useEffect, useState } from 'react';
import Articles from '../../components/Articles';
import Query from '../../components/Query';
import axios from 'axios';
import { Helmet } from 'react-helmet'

import ARTICLES_QUERY from '../../queries/article/articles';

const Home = props =>{

    const [ads, setAds] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/advertisements`)
        .then(res=>{
            setAds(res.data)
        })
    }, []);

    return (
        <div>
            <Helmet>
                <meta
                    name="description"
                    content="We aspire to give you credible, reliable and up-to-date information that shall have an inevitable impact on this society."
                />
                <title>NILE Trumpet Magazine</title>
            </Helmet>
            <div>
                <Query query={ARTICLES_QUERY}>
                    {({ data: { articles } }) => {
                        return <Articles ads={ads} articles={articles}/>
                    }}
                </Query>
            </div>
        </div>
    )
}

export default Home