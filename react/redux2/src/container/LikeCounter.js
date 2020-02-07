import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleHits} from '../actions';

class LikeCounter extends Component {

    handleLikes = (useraction) => {
        const newlikes = (useraction) === 'ADD' ? [this.props.likes+1,this.props.dislikes]:[this.props.likes,this.props.dislikes+1]

        this.props.dispatch(handleHits(newlikes,this.props.articleId))
    }
    render(){
        return(
            <div className="addlikes-wrapper">
                <h3>How About Article</h3>
                <div className="addlikes-container"
                >
                    <div className="btn like"
                    onClick={() => this.handleLikes('ADD')}>
                        <div className="hits">
                            {this.props.likes}
                        </div>
                        <div className="icon">
                            <i className="fa fa-thumbs-up"></i>
                        </div>
                    </div>
                    <div className="btn diilike"
                     onClick={() => this.handleLikes('REMOVE')}>
                        <div className="hits">
                            {this.props.dislikes}
                        </div>
                        <div className="icon">
                            <i className="fa fa-thumbs-down"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


LikeCounter.protoTypes ={
    dispatch:PropTypes.func
}
export default connect()(LikeCounter)
