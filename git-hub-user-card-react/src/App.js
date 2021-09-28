import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    userData: [],
    followers: [],
  };

  componentDidMount() {
    axios.get('https://api.github.com/users/BillyBernard')
    .then((resp) => {
      console.log(resp.data);
      this.setState({
        ...this.State,
        userData: resp.data,
      });
    });
    axios.get('https://api.github.com/users/BillyBernard/followers')
    .then((resp) => {
      console.log(resp.data);
      this.setState({
        ...this.State,
        followers: resp.data,
      });
    });
  }

  render() {
    return (
      <div className='App'>
        <h1>Github User Card</h1>
        <div>
          <img src={this.state.userData.avatar_url}/> 
          <p>Name: {this.state.userData.name}</p>
          <p>Login: {this.state.userData.login}</p>
          <p>Email: {this.state.userData.email}</p>
        </div>
        <div>
          <h2>Followers: {this.state.userData.followers}</h2>
          {this.state.followers.map((item) => {
            return (
            <div key={item.id}>
              <div><img src={item.avatar_url}/></div>
              <p>{item.login}</p>
              <p>{item.type}</p>
            </div>
            )
          })}
        </div>
      </div>
    )
  }

}

export default App;
