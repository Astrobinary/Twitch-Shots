import React, {Component} from 'react';

export default class Comments extends Component {

  render() {
    const styles = require('./Comments.scss');
    const profile = require('../../../static/profile-test.jpg');
    const goldglove = require('../../../static/goldglove.jpg');
    return (
            <div id="comments" className={styles.comments}>
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
    );
  }
}
