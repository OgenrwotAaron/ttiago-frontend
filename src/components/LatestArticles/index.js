import React from 'react';
import { GridList, GridListTile } from '@material-ui/core';

const LatestArticles = ({articles}) => {
    return ( 
        <div>
            <GridList cellHeight={160} cols={3}>
                {articles.map(article=>{

                    const imageUrl = process.env.NODE_ENV !== 'development' ? 
                                        article.image[0].url
                                    :
                                        process.env.REACT_APP_BACKEND_URL + article.image[0].url

                    return (
                        <GridListTile key={article.id}>
                            <img src={imageUrl} alt={article.title} />
                        </GridListTile>
                    )
                })}
            </GridList>
        </div>
     );
}
 
export default LatestArticles;