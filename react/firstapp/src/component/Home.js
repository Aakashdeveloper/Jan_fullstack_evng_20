import React , {Component} from 'react';
import Header from './Header';
import NewsList from './NewsList';
import JSON from '../db.json';

class Home extends Component {
    constructor(props){
        super(props)

        this.state={
            news: JSON,
            filtered: JSON
        }
    }

    filterNews(keywords){
        const output = this.state.news.filter((data) =>{
            return (data.title.toLowerCase().indexOf(keywords.toLowerCase()) > -1)
        })

        this.setState({filtered:output})
    }


    render(){
        return(
            <React.Fragment>
                <Header userText={(userdata) => this.filterNews(userdata)}/>
                <NewsList newsData={this.state.filtered}/>
            </React.Fragment>
        ) 
    }
}
//<a href="">
//<img src=""/>


export default Home;