import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './Auth.scss';
import goggleFood from './image/goggleFood.png';


class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  render() {
    return (
      <div className="Auth">
               <div className="jumbotron text-center col-mid-6">
            <h1 className="Header">Make Them Tasty</h1>
            <img src={goggleFood} alt="..." onClick={this.loginClickEvent}/>
            {/* <h6>Recipes we can share.</h6> */}
          </div>
        </div>

    );
  }
}

export default Auth;
