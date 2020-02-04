import React from 'react';
import Home from '../container/Home';
import { BrowserRouter, Route} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';


const  Routing = () => {
        return(
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path="/" component={Home}></Route>
                    <hr/>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
}

export default Routing;