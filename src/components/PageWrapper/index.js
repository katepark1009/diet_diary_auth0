import React from 'react'
import PropTypes from 'prop-types'

const PageWrapper = (props) => {
  return (
    <div className='content-wrapper'>
      <div className='row'>
        <div className='col-12'>
          <div className='card'>
            <div className='card-body'>
              <div className='container'>
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

PageWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ])
}

export default PageWrapper
