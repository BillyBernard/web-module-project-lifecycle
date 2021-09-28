import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    userData: [],
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
  }

  render() {
    return (
      <div className='App'>
        <h1>Github User Card</h1>
        <div>
          {this.state.userData.map((item) => {
            return <p>{item.name}</p>
          })}
        </div>
      </div>
    )
  }

}

export default App;
