import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'redux/modules/auth';
import { Login } from 'components';
import { Activity } from 'components';
import { routeActions } from 'react-router-redux';
import config from '../../config';
import { asyncConnect } from 'redux-async-connect';
import { Link } from 'react-router';

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const promises = [];

    if (!isInfoLoaded(getState())) {
      promises.push(dispatch(loadInfo()));
    }

    if (!isAuthLoaded(getState())) {
      promises.push(dispatch(loadAuth()));
    }

    return Promise.all(promises);
  }
}])

@connect(
  state => ({user: state.auth.user}),
  {logout, pushState: routeActions.push})

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      // login
      this.props.pushState('/loginSuccess');
    } else if (this.props.user && !nextProps.user) {
      // logout
      this.props.pushState('/');
    }
  }

  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };
  handleBlur() {
    if (document.getElementById('title')) {
      document.getElementById('title').style.zIndex = 2;
    }
  }
  handleClick() {
     if (document.getElementById('title')) {
       document.getElementById('title').style.zIndex = 0;
     }
   }

 handleLoginMenu() {
   // console.log(logout);
 }

  render() {
    // const {user} = this.props;
    const styles = require('./App.scss');

    return (
      <div className={styles.app}>
        <div className={styles.mainNav}>
            <Link to="/"><div className={styles.logo}><p>TWITCH<span className={styles.color}>SHOTS</span></p></div></Link>
            <h3>MAIN MENU</h3>
            <ul>
              <Link to="/"> <li><i className="fa fa-home"/>Home</li></Link>
              <Link to="/about"><li><i className="fa fa-fire"/>Popular</li></Link>
              <Link to="/widgets"><li><i className="fa fa-star"/>Favorites</li></Link>
              <Link to="/video"><li><i className="fa fa-heart"/>Video Test</li></Link>
            </ul>
            <h3>NEW ACTIVITY</h3>
            <Activity />
            <div className={styles.social}>
                <div className={styles.icons}>
                    <a href="https://twitter.com/_BrandonPadilla" target="_blank"><i className="fa fa-twitter"/></a>
                    <a href="https://github.com/Agnostics" target="_blank"><i className="fa fa-github"/></a>
                    <a href="https://github.com/Agnostics/Twitch-Shots/issues" target="_blank"><i className="fa fa-question-circle"/></a>
                </div>
            </div>
            <footer>
                <p>Made with <i className="fa fa-heart"/> by<a href="https://agnostics.github.io" target="_blank"> Brandon Padilla</a></p>
            </footer>
        </div>

        <div className={styles.search}>
			<i className="fa fa-search"><span>Random guy shotting darts</span></i>

			<input onClick={this.handleClick.bind(this)} onBlur={this.handleBlur.bind(this)} id="search"/>
        </div>

        <div className={styles.login} onClick={this.handleLoginMenu.bind(this)}>
            <Login/>
            <div className={styles.loginMenu}></div>
        </div>

        <Helmet {...config.app.head}/>

        <div className={styles.appContent}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
