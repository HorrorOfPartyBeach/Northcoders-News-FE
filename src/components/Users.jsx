import React, {Component} from 'react';
import * as api from '../Api';

class Users extends Component {
    state = {
        users: []
    }
    render() {
        const {users} = this.state
    return (
        <div>
        <h1>Users</h1>
        {users.map(user => {
            return <div key={user._id} className="userList">
            <img src={user.avatar_url} alt="Avatar"></img>
            <p>{user.username}</p>
            <p>{user.name}</p>
           </div>
       })}
       </div>
    )
    }

    componentDidMount() {
        console.log('Component mounted...')
        api.getUsers(this.props.id)
        .then(users => {
            this.setState({
                users
            })
        })
    }
}

export default Users;