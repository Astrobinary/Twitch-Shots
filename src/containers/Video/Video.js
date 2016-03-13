import React, {Component} from 'react';
import Helmet from 'react-helmet';
import { Comments } from 'components';
import { EditTitle } from 'components';

export default class Video extends Component {

constructor() {
  super();
  this.state = {
    showComments: true,
  };
}

handleComment() {
  this.setState({
    showComments: true
  });
	document.getElementById('desc').scrollIntoView();
}

handleTitle() {
  this.setState({
    showComments: false
  });
document.getElementById('desc').scrollIntoView();
}

title() {
  document.getElementById('title').style.zIndex = 0;
  document.getElementById('search').focus();
}

  render() {
    const styles = require('./Video.scss');
    const profile = require('../../../static/profile-test.jpg');
    return (
    <div>
        <div className={styles.topContain}>
            <Helmet title="Video" />
            <div className={styles.videoContain}>
                <video src="http://cdn.oddshot.tv/capture/lirik-2016031118571894.shot.mp4" controls="controls" poster="http://cdn.oddshot.tv/thumbs/lirik-2016031118571894.shot.thumb.jpg" preload="auto"></video>
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
                <div onClick={this.handleComment.bind(this)} className={styles.navButtons}><i className={styles.button + ' fa fa-comment'}/>Comments</div>
                <div onClick={this.handleTitle.bind(this)} className={styles.navButtons}><i className={styles.button + ' fa fa-asterisk'}/>Edit Title</div>
                <div className={styles.navButtons}><i className={styles.button + ' fa fa-star'}/>Favorite</div>
                <div className={styles.navButtons}><i className={styles.button + ' fa fa-share'}/>Share</div>
                <div className={styles.navButtons}><i className={styles.button + ' fa fa-chevron-up'}/>Up Vote</div>
                <div className={styles.navButtons + ' ' + styles.lastbutton}><i className={styles.button + ' fa fa-chevron-down'}/>Down Vote</div>
            </div>
        </div>
    </div>
        {this.state.showComments && <Comments />}
        {!this.state.showComments && <EditTitle />}
    </div>
	);
  }
}
