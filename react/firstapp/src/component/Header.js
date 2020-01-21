import React, {Component} from 'react';
import './header.css'

class Header extends Component {
    constructor(){
        super()
        
        this.state={
            title:'React App',
            keywords:''
        }

    }

    inputChange(event){
        console.log(event.target.value)
        this.setState({keywords:event.target.value})
        this.props.userText(event.target.value)
    }


    render(){
        return(
            <header>
                <div className="logo">
                    {this.state.title}
                </div>
                <center>
                   <input type="text" onChange={this.inputChange.bind(this)}/>
                   <p>{this.state.keywords}</p>
                </center>
                <hr/>
            </header>
        ) 
    }
}


export default Header;