import React, {Component} from 'react';
import Helmet from 'react-helmet';
import { Comments } from 'components';

export default class Video extends Component {

constructor() {
  super();
  this.state = {
    showComments: false
  };
}

handleComment() {
  this.setState({
    showComments: !this.state.showComments
  });
}

title() {
  document.getElementById('title').style.opacity = 0.05;
  document.getElementById('search').focus();
}

  render() {
    const styles = require('./Video.scss');
    const profile = require('../../../static/profile-test.jpg');
    return (
    <div>
        <div className={styles.container}>
            <Helmet title="Video" />
            <div className={styles.video}>
                <div className={styles.title} onClick={this.title.bind(this)} id="title">Random guy shooting darts<span className={styles.points}>+32</span></div>
                <video src="http://cdn.oddshot.tv/capture/lirik-20160301234246130.shot.mp4" controls="controls" poster="http://cdn.oddshot.tv/thumbs/lirik-20160301234246130.shot.thumb.jpg" preload="auto"></video>
            </div>
        <div className={styles.userNav}>
            <div className={styles.bg}>
                <img src={profile}/>
                <div className={styles.nameTag}>
                        <div className={styles.user}>Agnostics</div>
                        <div className={styles.follow}>
                            <i className="fa fa-heart-o"></i>
                            <span>Follow</span>
                        </div>
                </div>
                <div onClick={this.handleComment.bind(this)} className={styles.navButtons}><i className={styles.button + ' fa fa-comment'}/>Comment</div>
                <div className={styles.navButtons}><i className={styles.button + ' fa fa-asterisk'}/>Edit Title</div>
                <div className={styles.navButtons}><i className={styles.button + ' fa fa-star'}/>Favorite</div>
                <div className={styles.navButtons}><i className={styles.button + ' fa fa-share'}/>Share</div>
                <div className={styles.navButtons}><i className={styles.button + ' fa fa-chevron-up'}/>Up Vote</div>
                <div className={styles.navButtons + ' ' + styles.lastbutton}><i className={styles.button + ' fa fa-chevron-down'}/>Down Vote</div>
            </div>
        </div>
    </div>
        {this.state.showComments && <Comments/>}
    </div>
	);
  }
}
