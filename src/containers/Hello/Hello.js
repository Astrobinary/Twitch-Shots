import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class Hello extends Component {

  render() {
    const styles = require('./Hello.scss');
    return (
	<div className="container">
        <h1 className={styles.text}>Hello, World!</h1>
        <Helmet title="Hello!" />
        Have a wonderful day!
    </div>
	);
  }
}
