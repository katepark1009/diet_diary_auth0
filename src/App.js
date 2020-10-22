import React from 'react'
import { Route, Switch } from "react-router-dom";
import { NavWrapper, Loading } from './components/index'
import { useAuth0 } from "@auth0/auth0-react";
import Home from './components/Home'
import Profile from './components/Profile'
import ProtectedRoute from "./auth/ProtectedRoute";
import { useHistory } from "react-router-dom";

import './styles/styles.scss'

function App() {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  // if (isLoading) {
  //   return <p>Loading...</p>
  // }
  const history = useHistory();

  return (
    <div className="App">
      <NavWrapper 
        onClickLogIn={loginWithRedirect}
        onClickSignUp={() =>
          loginWithRedirect({
            screen_hint: "signup",
          })}
        onClickLogOut={() => logout({
          returnTo: window.location.origin,
        })}
        isLoggedIn={isAuthenticated}
      >
        <button onClick={() => history.push('/profile')}>Profile page</button>
      </NavWrapper>
      <div className="mt-5">
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/profile" component={Profile} />
        </Switch>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App
