import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

@connect(
  state => ({user: state.auth.user}))

export default class Comments extends Component {

	static propTypes = {user: PropTypes.object};

  render() {
    const styles = require('./Comments.scss');
    const profile = require('../../../static/profile-test.jpg');
    const goldglove = require('../../../static/goldglove.jpg');
	const {user} = this.props;

    return (
            <div id="comments" className={styles.comments}>
                <div className={styles.contain}>
                    <div id="desc" className={styles.desc}>Comments<i className="fa fa-sort"></i>
                    </div>

					{user && <div className={styles.input}>
						<div className={styles.avatarImg}><img src={profile}/>
							<div className={styles.author}>{user.name}</div>
						</div>
						<textarea className={styles.textarea} placeholder="Say something about the video here..."/>
						<button>Submit</button>
					</div>}

					{!user && <div className={styles.error}><i className="fa fa-exclamation-circle"/>Must be logged in to comment</div>}

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


                </div>
            </div>
    );
  }
}
