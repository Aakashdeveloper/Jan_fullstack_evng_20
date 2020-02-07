import React, {Component} from 'react';
import { connect} from 'react-redux';
import PropTypes from 'prop-types'
import { selectedNews, clearSelectNews} from '../actions';
import LikeCounter from './LikeCounter';


class NewsDetails extends Component {

    constructor(){
        super()
    }

    componentDidMount(){
        this.props.dispatch(selectedNews(this.props.match.params.id))
    }

    details = ({selected}) => {
        if(selected){
            return selected.map((data) => {
                return(
                    <div key={data.id}>
                        <div className="tags">
                            <span>
                                <i className="fa fa-eye">
                                    {data.views}
                                </i>
                            </span>
                            <span>
                                <i className="fa fa-thumbs-up">
                                     {data.likes[0]}
                                </i>
                            </span>
                            <span>
                                <i className="fa fa-thumbs-down">
                                    {data.likes[1]}
                                </i>
                            </span>
                        </div>
                        <div className="top">
                            <h2>{data.title}</h2>
                            <span>Article By:{data.author}</span>
                            <img src={`/images/articles/${data.img}`}/>
                            <div className="body-news">
                                {data.body}
                            </div>
                            <div>
                                <LikeCounter
                                    articleId={data.id}
                                    likes={data.likes[0]}
                                    dislikes={data.likes[1]}
                                >

                                </LikeCounter>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    render(){
        return(
            <div className="news_container">
                {this.details(this.props.details)}
            </div>
        )
    }

    componentWillUnmount(){
        this.props.dispatch(clearSelectNews())
    }
}


function mapStateToProps(state){
    console.log(state)
    return{
        details:state.articles
    }
}

NewsDetails.protoTypes={
    dispatch:PropTypes.func
}


export default connect(mapStateToProps)(NewsDetails)