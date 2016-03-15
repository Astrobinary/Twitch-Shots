import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

export default class Login extends Component {

	static propTypes = {
    	user: PropTypes.object,
		loginMenu: PropTypes.bool,
		logout: PropTypes.func.isRequired,
    };

  render() {
    const styles = require('./Login.scss');
    const profile = require('../../../static/profile-test.jpg');
    return (
	<div>
	{ this.props.user && <div className={styles.login}>
			<img src={profile}/> {this.props.user.name}
			<i className="fa fa-angle-down"/>
			{this.props.loginMenu && this.props.user && <div className={styles.loginMenu}>
				<ul>
					<li><i className="fa fa-cog"/>Settings</li>
					<li onClick={this.props.logout}><i className="fa fa-sign-out"/>Logout</li>
				</ul>
			</div> }
		</div>}

		{!this.props.user && <Link to="/login"><div className={styles.login}>
			 <i className="fa fa-sign-in"/> SIGN IN
		</div></Link>}
	</div>

    );
  }
}
