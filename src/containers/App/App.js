import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'redux/modules/auth';
import { Login } from 'components';
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

  constructor() {
    super();
    this.state = {
	loginMenu: false,
	mainMenu: false
	};
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
        this.props.pushState('/loginSuccess');
    } else if (this.props.user && !nextProps.user) {
        this.props.pushState('/');
    }
}

  handleLogout = () => {
    event.preventDefault();
    this.props.logout();
	this.setState({loginMenu: false});
  };

  handleBlur() {
      if (document.getElementById('title')) {
          document.getElementById('title').style.opacity = 1;
          document.getElementById('search').value = '';
      }
  }

  handleClick() {
    if (document.getElementById('title')) {
        document.getElementById('title').style.opacity = 0;
        document.getElementById('search').focus();
    }
}

toggleMenu(menu) {
    this.setState({[menu]: !this.state[menu]});
}

  render() {
    const styles = require('./App.scss');
	const {user} = this.props;

    return (
      <div className={styles.app}>
        <div onMouseEnter={this.toggleMenu.bind(this, 'mainMenu')} onMouseLeave={this.toggleMenu.bind(this, 'mainMenu')} className={styles.mainNav}>
			<div className={styles.logo}>
				TWITCHSHOTS
				<i className="fa fa-bars"/>
					{this.state.mainMenu && <div className={styles.menu}>
						<ul>
							<Link to="/"> <li><i className="fa fa-home"/>Home</li></Link>
							<Link to="/popular"><li><i className="fa fa-fire"/>Popular</li></Link>
							<Link to="/widgets"><li><i className="fa fa-star"/>Favorites</li></Link>
							<Link to="/video"><li><i className="fa fa-heart"/>Video Test</li></Link>
						</ul>
					</div>}
			</div>
        </div>

        <div className={styles.search}>
			<i onClick={this.handleClick.bind(this)} id="title" className="fa fa-search"><span>Twitch Shots | Home</span></i>

			<input onClick={this.handleClick.bind(this)} onBlur={this.handleBlur.bind(this)} id="search"/>
        </div>

        <div className={styles.login} onMouseEnter={this.toggleMenu.bind(this, 'loginMenu')} onMouseLeave={this.toggleMenu.bind(this, 'loginMenu')}>
            <Login user={user} logout={this.handleLogout.bind(this)} loginMenu={this.state.loginMenu}/>
        </div>

        <Helmet {...config.app.head}/>

        <div className={styles.appContent}>
          {this.props.children}
        </div>
	  	<footer>
	  		<p>Made with <i className="fa fa-heart"/> by<a href="https://agnostics.github.io" target="_blank"> Brandon Padilla</a></p>
	  	</footer>
      </div>
    );
  }
}
