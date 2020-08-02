import React from 'react';
import ReactDom from 'react-dom'
import { ApolloProvider } from '@apollo/client'
import App from './containers/App';
import client from './utils/apolloClient'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'

ReactDom.render(
    <Router>
        <ApolloProvider client={client}>
           <App/> 
        </ApolloProvider>
    </Router>,
    document.getElementById('root')
)