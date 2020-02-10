import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators}  from 'redux';
import { PostDate} from '../actions';

class FormsComponent extends Component {
    constructor(){
        super()

        this.state={
            title:'',
            body:'',
            category:''
        }

        this.handleChangeTitle = this.handleChangeTitle.bind(this)
        this.handleChangeBody = this.handleChangeBody.bind(this)
        this.handleChangeCategory = this.handleChangeCategory.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeTitle(event){
        this.setState({title:event.target.value})
    }
    handleChangeBody(event){
        this.setState({body:event.target.value})
    }
    handleChangeCategory(event){
        this.setState({category:event.target.value})
    }
    handleSubmit(){
        this.props.PostDate(
            this.state.title,
            this.state.body,
            this.state.category,
        )

        alert('Submitted')
    }

    render(){
        return(
            <div className="container">
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" 
                        className="form-control"
                        value={this.state.title}
                        id="title"
                        onChange={this.handleChangeTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Body</label>
                        <input type="text" 
                        className="form-control"
                        value={this.state.body}
                        id="body"
                        onChange={this.handleChangeBody}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <input type="text" 
                        className="form-control"
                        value={this.state.category}
                        id="category"
                        onChange={this.handleChangeCategory}
                        />
                    </div>
                    <button className="btn btn-success"
                    onClick={this.handleSubmit}>
                        Submit
                    </button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({PostDate}, dispatch)
}

export default connect(null,mapDispatchToProps)(FormsComponent)