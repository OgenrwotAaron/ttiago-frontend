import React, { useEffect, useState } from 'react';

import { Switch, Route } from 'react-router-dom'
import axios from 'axios'

import Nav from '../../components/Nav';
import Articles from '../Articles';
import Article from '../Article';
import Category from '../Category'
import Footer from '../../components/Footer';
import Authors from '../Authors';
import About from '../About';
import Author from '../Author'
import Contact from '../Contact';
import User from '../User';
import Write from '../../components/Write/write';

const App = () =>{

    const [ads, setAds] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/advertisements`)
        .then(res=>{
            setAds(res.data)
        })
    }, []);

    return (
        <div className='App'>
            <Nav ads={ads}/>
            <Switch>
                <Route path='/' exact component={Articles} />
                <Route path='/article/:id' exact component={Article} />
                <Route path='/category/:id' exact component={Category} />
                <Route path='/team' exact component={Authors} />
                <Route path='/author/:id' exact component={Author} />
                <Route path='/about' exact component={About} />
                <Route path='/contact' exact component={Contact} />
                <Route path='/user/:id' exact component={User} />
                <Route path='/write' exact component={Write} />
            </Switch>
            <Footer ads={ads}/>
        </div>
    )
}

export default App;