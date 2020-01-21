import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';


const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <header>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/post">Post</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                    </ul>
                </header>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/post" component={Post}></Route>
                <Route exact path="/profile" component={Profile}></Route>
            </div>
        </BrowserRouter>
    )
}

export default Routing;