import React, {Component} from 'react';
import { connect } from 'react-redux';
import { latestNews,articleNews,galleryNews } from '../actions';
import PropTypes from 'prop-types'

import LatestNews from '../component/Home/latestNews';
import ArticleNews from '../component/Home/articleNews';
import GalleryNews from '../component/Home/galleryNews';

class Home extends Component {
    componentDidMount(){

        this.props.dispatch(latestNews())
        this.props.dispatch(articleNews())
        this.props.dispatch(galleryNews())

    }
    render(){
        return(
            <div>
                <h1>Home Page</h1>
                <LatestNews latdata={this.props.articlesdata.latest}></LatestNews>
                <ArticleNews artdata={this.props.articlesdata.art}></ArticleNews>
                <GalleryNews galdata={this.props.gallerydata.gal}></GalleryNews>
            </div>
        )
    }
}

function mapStateToProp(state){
    console.log(state)
    return{
        articlesdata: state.articles,
        gallerydata: state.gallery
    }
}

Home.protoTypes={
    dispatch:PropTypes.func
}

export default connect(mapStateToProp)(Home);