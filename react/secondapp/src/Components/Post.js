import React from 'react';
import {Link } from 'react-router-dom';

const Post = () => {
    return(
        <div className="panel panel-success">
            <div className="panel-heading">
                Post Page
            </div>
            <div className="panel-body">
                <h2>JavaScript</h2>
                <Link to="/post/Javascript">Details</Link>
                <h2>NodeJs</h2> 
                <Link to="/post/NodeJs">Details</Link>
                <h2>React</h2>
                <Link to="/post/React">Details</Link>
                <h2>AWS</h2>
                <Link to="/post/AWS">Details</Link>
            </div>
        </div>
    )
}

export default Post