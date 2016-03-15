import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import * as authActions from 'redux/modules/auth';

@connect(
  state => ({user: state.auth.user}),
  authActions)
export default class Login extends Component {
  static propTypes = {
    user: PropTypes.object,
    login: PropTypes.func,
    logout: PropTypes.func
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const input = this.refs.username;
    this.props.login(input.value);
    input.value = '';
  }

  render() {
    const {user, logout} = this.props;
    const styles = require('./Login.scss');
    return (
      <div className={styles.loginPage}>
        <Helmet title="Login"/>
        {!user &&
        <div>
          <form onSubmit={this.handleSubmit}>
              <input type="text" ref="username" placeholder="Enter a username"/>
            <button className={styles.submit} onClick={this.handleSubmit}>
				Log In
            </button>
          </form>
          <p>This is only a temporary login for testing purposes.</p>
        </div>
        }
        {user &&
        <div>
          <p>You are currently logged in as {user.name}.</p>

          <div>
            <button className={styles.submit} onClick={logout}>Log Out</button>
          </div>
        </div>
        }
      </div>
    );
  }
}
