import React, {Component} from 'react';

class Login extends Component {
    state = {
        username: "tickle122"
    }
    render() {
        if(this.props.user.username) return this.props.children
        return(
          <form onSubmit={this.handleSubmit} className="main">
            <label htmlFor="username">Username: </label>
            <input
            type="text"
            id="username"
            name="username" 
            onChange={this.handleChange}
            value={this.state.username} /> 
            <button>Log in</button>
          </form>  
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.login(this.state.username)
    }

    handleChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
}

export default Login;