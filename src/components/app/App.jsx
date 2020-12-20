import React, { Component } from 'react';
import { users, addUser } from '../../model/store';

class App extends Component {

  state = {
    currentUser: "Phillip"
  }

  changeState = (e) => {
    this.setState({ currentUser: e.target.value })
  }

  render() {
    return (
      <div style={this.style}>
        <h1>App component</h1>
        <h1>{this.state.currentUser}</h1>
        {users.map((user, i) => <div key={i}><span>{user.name}</span><span>{user.lastname}</span></div>)}
        <button >add</button>
        <button onClick={() => this.changeState()}>changeState</button>
        <input type="text" onKeyUp={(e) => this.changeState(e)} />
      </div>
    );
  }
}

export default App;