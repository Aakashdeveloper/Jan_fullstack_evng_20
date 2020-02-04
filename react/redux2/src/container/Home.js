import React, {Component} from 'react';
import { connect } from 'react-redux';
import { latestNews } from '../actions';
import { bindActionCreators} from 'redux';

//import LatestNews from '../component/Home/latestNews';

class Home extends Component {
    componentDidMount(){

        this.props.latestNews()

    }
    render(){
        return(
            <div>
                <h1>Home Page</h1>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        articlesdata: state.articles
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);