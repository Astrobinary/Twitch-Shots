import React, {Component} from 'react';

export default class Login extends Component {

  render() {
    const styles = require('./Login.scss');
    const profile = require('../../../static/profile-test.jpg');
    return (
      <div className={styles.login}><img src={profile}/> Agnostics <i className="fa fa-angle-down"/></div>
    );
  }
}
