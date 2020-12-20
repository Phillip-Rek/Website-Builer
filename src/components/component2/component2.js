import React, { Component } from 'react';
import { users, addUser } from '../../model/store';

class Component2 extends Component {

    style = {
        textAlign: 'center'
    }

    render() {
        return (
            <div style={this.style}>
                <h1>component 2</h1>
                {users.map((user, i)=> <div key={i}><span>{user.name}</span><span>{user.lastname}</span></div>)}
                <button onClick={() => addUser({ name: 'user4', lastname: 'lastname4' })}>add</button>
                <button onClick={() => this.props.history.push('/')}>route</button>
            </div>
        );
    }
}

export default Component2;