import React, {Component} from 'react';
import {Link} from '@reach/router';
import Button from './Button';
import * as api from '../Api.js';

class Nav extends Component {
    state = {
        topics: []
    }
    render() {
    return (
        <nav>
            <Link to="/"><Button text={"Home"}/> </Link> 
            {this.state.topics.map(({_id, slug, title}) => {
                return <Link key={_id} to={`/topics/${slug}`}>
                <Button text={title}/> </Link>
                })
            }
            <Button text={"Users"}/>
        </nav>
    )}

    componentDidMount() {
        this.fetchTopics();
    }

    fetchTopics = () => {
        api.getTopics().then(topics => {
            this.setState({
                topics
            })
        })
    }
}

export default Nav;