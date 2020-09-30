import React from 'react';
//import logo from './logo.svg';
import './App.css';
import User from './components/User'
import Follower from './components/Follower'

class App extends React.Component {
constructor (){
  console.log("App Component constructer is called")
  super();
  this.state ={
    user:[],
    followers:[],
    userName:'LizDrumm'
    
  }
}

componentDidMount(){
console.log("App comonent is mounted")
this.fetchUser(this.state.userName);
this.fetchFollowers(this.state.userName);
}


//fetching user data from Github API
fetchUser = (userName) => {
  fetch(`https://api.github.com/users/${userName}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      this.setState({
        user: data
      });
    })
    .catch((err) => {
      console.log(err);
    });
};


fetchFollowers = (userName) => {
  fetch(`https://api.github.com/users/${userName}/followers`)
    .then((res) => {
      return res.json();
    })
    .then(data => {
       this.setState({
       followers: data
       });
     })
    .catch(err => {
      console.log(err);
    });
    };


render() {
  return (
    <div>
      <h1>GitHub User Info!</h1>
     
      <div className="userContainer">
      <User user={this.state.user} />
        
        <div>
        
      {this.state.followers.map(follower=>
      <Follower follower= {follower} />)}
      </div>
      </div>
    </div>
  );
}

}

export default App;
