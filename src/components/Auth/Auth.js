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
            <h1 className="Header">food adventure</h1>
            <img src={goggleFood} alt="..." onClick={this.loginClickEvent}/>
            <h6>I have been working in customer service for 4 years.
              Previous to starting NSS, I didn't have any programing experience.
              What I love about web development is the challenge of forming ideas
              and turning them into a reality, that other people can interact with.
              Before joining NSS, I had talked to NSS alumni who had nothing but
              great things to share about their learning experience, which inspired
              me to look into programs offered by the school.
              Stuff and students at NSS are welcoming and encouraging.
              Especially as someone who constantly struggles due to luck of coding skills,
              I have found a home at NSS.</h6>
          </div>
        </div>

    );
  }
}

export default Auth;
