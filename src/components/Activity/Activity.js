import React, {Component} from 'react';

export default class Activity extends Component {

  render() {
    const styles = require('./Activity.scss');
    const profile = require('../../../static/profile-test.jpg');
    const sneaky = require('../../../static/C9Sneaky.jpg');
    const goldglove = require('../../../static/goldglove.jpg');
    return (
    <ul>
      <li className={styles.activity}><img src={profile}/>Agnostics<div className={styles.number}>7</div>
      </li>

      <li className={styles.activity}><img src={goldglove}/>Goldglove<div className={styles.number}>3</div>
      </li>

      <li className={styles.activity}><img src={sneaky}/>C9Sneaky<div className={styles.number}>1</div>
      </li>
    </ul>
    );
  }
}
