import React from 'react';

import { BrowserRouter, Route} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

import Home from '../container/Home';
import NewsDetails from '../container/NewsDetails'

const  Routing = () => {
        return(
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/details/:id" component={NewsDetails}></Route>
                    <hr/>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
}

export default Routing;