import React, { useEffect, useState } from 'react';
import Articles from '../../components/Articles';
import Query from '../../components/Query';
import axios from 'axios'

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