import React from 'react';
import axios from 'axios';
import styled from "styled-components";

const AppBack = styled.div`
  background-color: blue;
`

const MyCard = styled.div`
  background-color: orange;
  padding-bottom: 2em;
`
const FollowerCard = styled.div`
  background-color: blue;
  padding-top: 2em;
`
const UserImg = styled.img`
  border-radius: 50%
`

const CardItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
`

const CardInfo = styled.div`
  background-color: grey;
  padding: 2em;
  margin: 2em;
  border-radius: 5px;
`

const StyledH2 = styled.h2`
  color: white;
  background-color: blue;
  text-align: center;
  padding: 2em;
`

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
      <AppBack className='App'>
        
        <MyCard>
          <CardItems>
          <h1>Github User Card</h1>
          <UserImg src={this.state.userData.avatar_url} alt="me"/>
          <CardInfo> 
            <p>Name: {this.state.userData.name}</p>
            <p>Login: {this.state.userData.login}</p>
            <p>Email: {this.state.userData.email}</p>
            <p>Followers: {this.state.userData.followers}</p>
            <p>Following: {this.state.userData.following}</p>
            
            </CardInfo>
          </CardItems>
        </MyCard>
        
        <div>
          <StyledH2>My Followers: </StyledH2>
          {this.state.followers.map((item) => {
            return (
              
            <FollowerCard key={item.id}>
              
              <CardItems>
                <UserImg src={item.avatar_url} alt="followers"/>
                <CardInfo>
                  <p>Login: {item.login}</p>
                  <p>Type: {item.type}</p>
                </CardInfo>
              </CardItems>
            </FollowerCard>
            )
          })}
        </div>
      </AppBack>
    )
  }

}

export default App;
