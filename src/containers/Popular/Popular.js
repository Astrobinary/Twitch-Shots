import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class Popular extends Component {

  render() {
	const styles = require('./Popular.scss');
    return (

      <div className={styles.MainContainer}>
        <h1>Popular</h1>
        <Helmet title="Popular"/>
      </div>
    );
  }
}
