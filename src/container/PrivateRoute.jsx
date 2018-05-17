import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom'

// component inspired from https://reacttraining.com/react-router/web/example/auth-workflow

// /!\ you shall destruct props.component otherwise you get a warning:
// "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => rest.user.logged
    ? <Component {...props} />
    : <Redirect to={{pathname: '/login', state: {from: props.location}}} />
  } />
)

const mapStateToProps = ({ user }) => ({ user })
export default withRouter(connect(mapStateToProps)(PrivateRoute))

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  user: PropTypes.shape({ // user is get with redux connect
    logged: PropTypes.bool.isRequired
  })
}
