import React from 'react';
import Articles from '../../components/Articles';
import Query from '../../components/Query';

import ARTICLES_QUERY from '../../queries/article/articles';

const Home = () =>{
    return (
        <div>
            <div>
                <Query query={ARTICLES_QUERY}>
                    {({ data: { articles } }) => {
                        return <Articles articles={articles}/>
                    }}
                </Query>
            </div>
        </div>
    )
}

export default Home