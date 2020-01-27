//Get Default State
//Set Initial State
//Before get created
//Render Jsx
//After get Created
//After loosing scope

import React, {Component} from 'react';

class LifeCycle extends Component {
    //1 Get Default State
    constructor(props){
        console.log(">>>Inside Constructor<<<<<");
        super(props);

        //2 Set Initial State
        this.state={
            title:'Lifecycle'
        }
    }

    componentWillUpdate(){
        console.log(">>>componentWillUpdate<<<<<");
    }

    componentDidUpdate(){
        console.log(">>>componentDidUpdate<<<<<");
    }

    //3 Before get created
    componentWillMount(){
        console.log(">>>componentWillMount<<<<<");
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log(">>>shouldComponentUpdate<<<<<");
        if(nextState.title === this.state.title){
            return false
        }else{
            return true
        }
    }

    //4 Render Jsx
    render(){
        console.log(">>>Inside render<<<<<");
        return(
            <div>
                <h1>{this.state.title}</h1>
                <div className="btn btn-success"
                onClick={() => {this.setState({title:'Something Else'})}}>
                    Click me
                </div>
            </div>
        )
    }

    //5After get Created
    componentDidMount(){
        console.log(">>>componentDidMount<<<<<");
    }

    componentWillUnmount(){
        alert("You are leaving the page")
    }

}


export default LifeCycle