import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class Video extends Component {

  render() {
    const styles = require('./Video.scss');
    const profile = require('../../../static/profile-test.jpg');
    return (
    <div>
        <div className={styles.container}>
            <Helmet title="Video" />
            <div className={styles.video}>
                <div className={styles.title}>Random guy shooting darts<span className={styles.points}>+32</span></div>
                <video src="http://cdn.oddshot.tv/capture/lirik-201602262235914.shot.mp4" controls="controls"></video>
            </div>
        <div className={styles.userNav}>
            <div>
                <img src={profile}/>
                <div className={styles.nameTag}>
                        <div className={styles.user}>Agnostics</div>
                        <div className={styles.follow}>
                            <i className="fa fa-heart-o"></i>
                            <span>Follow</span>
                        </div>
                </div>
                <div className={styles.navButtons}><i className={styles.button + ' fa fa-comment'}/>Comment</div>
                <div className={styles.navButtons}><i className={styles.button + ' fa fa-asterisk'}/>Edit Title</div>
                <div className={styles.navButtons}><i className={styles.button + ' fa fa-star'}/>Favorite</div>
                <div className={styles.navButtons}><i className={styles.button + ' fa fa-share'}/>Share</div>
                <div className={styles.navButtons}><i className={styles.button + ' fa fa-chevron-up'}/>Up Vote</div>
                <div className={styles.navButtons}><i className={styles.button + ' fa fa-chevron-down'}/>Down Vote</div>
            </div>
        </div>
    </div>
        <div className={styles.comments}>
        </div>
    </div>
	);
  }
}
