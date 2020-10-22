import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

const NavWrapper = ({ isLoggedIn, collapsed, onClickLogIn, onClickSignUp, onClickLogOut }) => {
  console.log("NavWrapper -> collapsed", collapsed)
  return (
    <nav className='navbar col-12 p-0 fixed-top d-flex flex-row'>
      <div className='navbar-menu-wrapper d-flex align-items-center justify-content-between'>
        {!isLoggedIn
          ? (
            <Fragment>
              <ul className='navbar-nav'>
                <Title level={3} className='text-white ml-4 mb-0'>Diet Diary</Title>
              </ul>
              <ul className='navbar-nav mr-4'>
                <div className='row'>
                  <Button type='light mr-3' onClick={onClickSignUp}>Sign Up</Button>
                  <Button type='light' onClick={onClickLogIn}>Log in</Button> 
                </div>
              </ul>
            </Fragment>
          ) : (
            <Fragment>
              <ul className='navbar-nav'>
                <Title level={3} className='text-white ml-4 mb-0'>Diet Diary</Title>
              </ul>
              <ul className='navbar-nav'>
                <Button type='light mr-3' onClick={onClickLogOut}>Log out</Button>
              </ul>
              {/* <ul className='navbar-nav'>
                {leftNavBar}
              </ul>
              <ul className='navbar-nav'>
                {children}
              </ul> */}
            </Fragment>
          )}
      </div>
    </nav>
  )
}

NavWrapper.propTypes = {
  isLoggedIn: PropTypes.bool,
  leftNavBar: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),
  onClickLogIn: PropTypes.func,
  onClickSignUp: PropTypes.func,
  onClickLogOut: PropTypes.func
}

export default NavWrapper