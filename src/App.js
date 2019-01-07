import React, { Component } from 'react';
import firebase from 'firebase'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: null
    }

    this.handleAuth = this.handleAuth.bind(this);
    this.renderLoginButton = this.renderLoginButton.bind(this);
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        user
      });
    });
  }

  handleAuth(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(res => console.log(`${res.user.email} ha iniciado sesion`))
      .catch(err => console.error(err));
  }

  handleLogout(){
    firebase.auth().signOut()
    .then(res => console.log(`${res.user.email} ha salido`))
    .catch(err => console.error(err));
  }

  renderLoginButton(){
    // Si el user esta logeado
    if(this.state.user){
      return (
        <div>
          <img src={this.state.user.photoURL} alt="{this.state.user.displayName}"/>
          <p>Hola {this.state.user.displayName}</p>
          <button onClick={this.handleLogout} >Sign out</button>
        </div>
      );
    } else {
      // Y si no lo esta hace otra cosa
      return(
        <button onClick={this.handleAuth}>Sign in</button>
      )
    }
  }
  render() {
    return (
      <div className="App">
        <h2>Freegram</h2>
        <div className="div">
          <p className="App-intro">
            {this.renderLoginButton()}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
