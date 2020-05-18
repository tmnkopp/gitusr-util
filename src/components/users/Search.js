import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text:''

    }
    
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.text)
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)} className="form">
                    <input type="text" name="text" placeholder="Search.." 
                    value={this.state.text}
                    onChange={this.onChange}
                    ></input> 
                    <input type="submit" value="search"></input>
                </form>
            </div>
        )
    }
}

export default Search
 