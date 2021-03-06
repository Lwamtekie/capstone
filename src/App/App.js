import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';
import Auth from '../components/Auth/Auth';
import Home from '../components/Home/home';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import './App.scss';
import fbConnection from '../helpers/data/connection';
import EditRecipe from '../components/EditRecipe/EditRecipe';
import MyRecipes from '../components/MyRecipes/MyRecipes';
import NewRecipe from '../components/NewRecipe/NewRecipe';
import SingleRecipe from '../components/SingleRecipe/SingleRecipe';

fbConnection();
const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};
class App extends React.Component {
    state = {
      authed: false,
    }

    componentDidMount() {
      this.removeListener = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ authed: true });
        } else {
          this.setState({ authed: false });
        }
      });
    }

    componentWillUnmount() {
      this.removeListener();
    }

    render() {
      const { authed } = this.state;
      return (
        <div className="App">
          <BrowserRouter>
            <React.Fragment>
              <MyNavbar authed={authed} />
              <div className='AUTH'>
                {/* <div className="row"> */}
                  <Switch>
                    <PublicRoute path='/auth' component={Auth} authed={authed} />
                    <PrivateRoute path='/home' component={Home} authed={authed} />
                    <PrivateRoute path='/my' component={MyRecipes} authed={authed} />
                    <PrivateRoute path='/new' component={NewRecipe} authed={authed}/>
                    <PrivateRoute path='/edit/:id' component={EditRecipe} authed={authed} />
                    <PrivateRoute path='/single/:id' component={SingleRecipe} authed={authed} />
                    <Redirect from="*" to="/auth" />
                  </Switch>
                </div>
              {/* </div> */}
            </React.Fragment>
          </BrowserRouter>
        </div>
      );
    }
}

export default App;
