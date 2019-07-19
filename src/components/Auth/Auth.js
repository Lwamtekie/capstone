import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  render() {
    return (
      <div className="Auth ">
        <h1>Auth</h1>
        <h3>Hello llkjglekjrgklerglkj2elkg3lkghl1k3hglk13h4gli43kown</h3>
        <button className="btn btn" onClick={this.loginClickEvent}>Login with Google</button>
      </div>
    );
  }
}

export default Auth;
