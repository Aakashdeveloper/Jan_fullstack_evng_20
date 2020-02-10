import React from 'react';

import { BrowserRouter, Route} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

import Home from '../container/Home';
import NewsDetails from '../container/NewsDetails';
import FormsComponent from '../container/FormContainer';

const  Routing = () => {
        return(
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/details/:id" component={NewsDetails}></Route>
                    <Route exact path="/forms" component={FormsComponent}></Route>
                    <hr/>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
}

export default Routing;