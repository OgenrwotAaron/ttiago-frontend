import React from 'react';

import { Switch, Route } from 'react-router-dom'

import Nav from '../../components/Nav';
import Articles from '../Articles';
import Article from '../Article';
import Category from '../Category'

const App = () =>{
    return (
        <div className='App'>
            <Nav/>
            <Switch>
                <Route path='/' exact component={Articles} />
                <Route path='/article/:id' exact component={Article} />
                <Route path='/category/:id' exact component={Category} />
            </Switch>
        </div>
    )
}

export default App;