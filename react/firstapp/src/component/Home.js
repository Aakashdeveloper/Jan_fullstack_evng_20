import React , {Component} from 'react';
import Header from './Header';
import NewsList from './NewsList';
import JSON from '../db.json';

class Home extends Component {
    constructor(props){
        super(props)

        this.state={
            news: JSON
        }
    }
    render(){
        return(
            <React.Fragment>
                <Header/>
                <NewsList newsData={this.state.news}/>
            </React.Fragment>
        ) 
    }
}
//<a href="">
//<img src=""/>


export default Home;