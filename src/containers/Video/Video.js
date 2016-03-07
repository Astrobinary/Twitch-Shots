import React, {Component} from 'react';
import Helmet from 'react-helmet';

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
    const goldglove = require('../../../static/goldglove.jpg');
    return (
    <div>
        <div className={styles.container}>
            <Helmet title="Video" />
            <div className={styles.video}>
                <div className={styles.title} onClick={this.title.bind(this)} id="title">Random guy shooting darts<span className={styles.points}>+32</span></div>
                <video src="http://cdn.oddshot.tv/capture/mvg-league-2016030713918940.shot.mp4" controls="controls"></video>
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
        {this.state.showComments && <div id="comments" className={styles.comments}>
            <div className={styles.contain}>

                <div className={styles.comment}>
                    <div className={styles.avatarImg}><img src={goldglove}/><div className={styles.author}>Goldglove</div></div>
                    <div className={styles.singleComment}>
                        <div className={styles.buttons}>
                            <i className="fa fa-chevron-up"/>
                            <i className="fa fa-chevron-down"/>
                            <div className={styles.points}>+9001</div>

                        </div>
                        <div className={styles.messageText}>
                            Lorem
                        </div>
                    </div>
                </div>

                <div className={styles.comment}>
                    <div className={styles.avatarImg}><img src={goldglove}/><div className={styles.author}>Hamglove</div></div>
                    <div className={styles.singleComment}>
                        <div className={styles.buttons}>
                            <i className="fa fa-chevron-up"/>
                            <i className="fa fa-chevron-down"/>
                            <div className={styles.points}>+34</div>
                        </div>
                        <div className={styles.messageText}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                </div>

                <div className={styles.comment}>
                    <div className={styles.avatarImg}><img src={goldglove}/><div className={styles.author}>Silverlove</div></div>
                    <div className={styles.singleComment}>
                        <div className={styles.buttons}>
                            <i className="fa fa-chevron-up"/>
                            <i className="fa fa-chevron-down"/>
                            <div className={styles.points}>+27</div>
                        </div>
                        <div className={styles.messageText}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </div>
                    </div>
                </div>

                <div className={styles.comment}>
                    <div className={styles.avatarImg}><img src={goldglove}/><div className={styles.author}>Baldglove</div></div>
                    <div className={styles.singleComment}>
                        <div className={styles.buttons}>
                            <i className="fa fa-chevron-up"/>
                            <i className="fa fa-chevron-down"/>
                            <div className={styles.points}>+11</div>
                        </div>
                        <div className={styles.messageText}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        </div>
                    </div>
                </div>

                <div className={styles.comment}>
                    <div className={styles.avatarImg}><img src={goldglove}/><div className={styles.author}>Glovegold</div></div>
                    <div className={styles.singleComment}>
                        <div className={styles.buttons}>
                            <i className="fa fa-chevron-up"/>
                            <i className="fa fa-chevron-down"/>
                            <div className={styles.points}>+1</div>
                        </div>
                        <div className={styles.messageText}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                </div>


                <div className={styles.input}>
                <div className={styles.avatarImg}><img src={profile}/><div className={styles.author}>Bob Sagot</div></div>
                <input placeholder="Say something about the video here..."/>
                <button>Submit</button>
                </div>
            </div>
        </div>
}
    </div>
	);
  }
}
