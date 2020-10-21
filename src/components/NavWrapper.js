import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const NavWrapper = ({ isLoggedIn, logo, leftNavBar, children, onClickLogIn }) => {
  return (
    <nav className='navbar col-12 p-0 fixed-top d-flex flex-row'>
      <div className='navbar-menu-wrapper d-flex align-items-center justify-content-between'>
        {!isLoggedIn
          ? (
            <Fragment>
              <div></div>
              <ul className='navbar-nav mr-4'>
                <button className='btn btn-light btn-xs' type='button' onClick={onClickLogIn}>Login</button>
              </ul>
            </Fragment>
          ) : (
            <Fragment>
              <ul className='navbar-nav'>
                {leftNavBar}
              </ul>
              <ul className='navbar-nav'>
                {children}
              </ul>
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
  onClickLogIn: PropTypes.func
}

export default NavWrapper