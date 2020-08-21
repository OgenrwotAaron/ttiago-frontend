import React from 'react';

import { Switch, Route } from 'react-router-dom'

import Nav from '../../components/Nav';
import Articles from '../Articles';
import Article from '../Article';
import Category from '../Category'
import Footer from '../../components/Footer';
import Authors from '../Authors';
import About from '../About';
import Author from '../Author'
import Contact from '../Contact';

const App = () =>{
    return (
        <div className='App'>
            <Nav/>
            <Switch>
                <Route path='/' exact component={Articles} />
                <Route path='/article/:id' exact component={Article} />
                <Route path='/category/:id' exact component={Category} />
                <Route path='/authors' exact component={Authors} />
                <Route path='/author/:id' exact component={Author} />
                <Route path='/about' exact component={About} />
                <Route path='/contact' exact component={Contact} />
            </Switch>
            <Footer/>
        </div>
    )
}

export default App;