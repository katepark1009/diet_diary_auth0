import React, { useState } from 'react'
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import { Button } from 'antd';
import { NavWrapper } from './components/index'
import ProtectedRoute from "./auth/ProtectedRoute";
import Home from './components/Home'
import Profile from './components/Profile'
import SideNav from './components/SideNav'
import Diary from './components/Diary'
import Trending from './components/Trending'
import Vip from './components/Vip'
import { Provider } from 'react-redux'
import store from './redux/store'

import './styles/styles.scss'

function App() {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();
  const [collapsed, setCollapsed] = useState(true)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }
  // if (isLoading) {
  //   return <p>Loading...</p>
  // }
  const history = useHistory();

  return (
    <div className="App">
      <Provider store={store}>
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
        toggleCollapsed={toggleCollapsed}
        collapsed={collapsed}
      >
        <Button type='light' onClick={() => history.push('/profile')}>Profile page</Button>
      </NavWrapper>
      <div className='main-container row' style={{ height: 'calc(100vh - 50px)' }}>
        <div className='col-2' style={{ maxWidth: 250, height: '100%' }}>
          <SideNav isLoggedIn={isAuthenticated}/>
        </div>
        <div className='col-10 px-auto'>
          <div className='p-0' style={{ marginTop: '50px', width: '100%' }}>
            <Switch>
              <Route path="/" exact component={Home} />
              <ProtectedRoute path="/profile" component={Profile} />
              <ProtectedRoute path="/diary" component={Diary} />
              <ProtectedRoute path="/trending" component={Trending} />
              <ProtectedRoute path="/vip" component={Vip} />
            </Switch>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      </Provider>
    </div>
  );
}

export default App
