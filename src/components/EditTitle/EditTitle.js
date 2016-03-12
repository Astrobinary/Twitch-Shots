import React, {Component} from 'react';

export default class EditTitle extends Component {

  render() {
    const styles = require('./EditTitle.scss');
    const goldglove = require('../../../static/goldglove.jpg');

    return (
<div className={styles.titles}>
    <div className={styles.contain}>
        <div id="desc" className={styles.desc}>Edit Title<i className="fa fa-sort"></i></div>

		<div className={styles.input} >
			<div className={styles.avatarImg}>
				<img src={goldglove}/>
				<div className={styles.author}>Bob Sagot</div>
			</div>
			<input id="commentInput" placeholder="Submit your title here..."/>
			<button>Submit</button>
		</div>

        <div className={styles.title}>
            <div className={styles.avatarImg}><img src={goldglove}/><div className={styles.author}>Goldglove</div></div>
            <div className={styles.userTitle}>
                <div className={styles.buttons}>
                    <i className="fa fa-chevron-up"/>
                    <div className={styles.points}>+89</div>
                    <i className="fa fa-chevron-down"/>
                </div>
                <div className={styles.messageText}>
                    Random guy shotting darts
                </div>
            </div>
        </div>

        <div className={styles.title}>
            <div className={styles.avatarImg}><img src={goldglove}/><div className={styles.author}>Goldglove</div></div>
            <div className={styles.userTitle}>
                <div className={styles.buttons}>
                    <i className="fa fa-chevron-up"/>
                    <div className={styles.points}>+24</div>
                    <i className="fa fa-chevron-down"/>
                </div>
                <div className={styles.messageText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </div>
            </div>
        </div>

        <div className={styles.title}>
            <div className={styles.avatarImg}><img src={goldglove}/><div className={styles.author}>Goldglove</div></div>
            <div className={styles.userTitle}>
                <div className={styles.buttons}>
                    <i className="fa fa-chevron-up"/>
                    <div className={styles.points}>+16</div>
                    <i className="fa fa-chevron-down"/>
                </div>
                <div className={styles.messageText}>
                    Lorem
                </div>
            </div>
        </div>
    </div>
</div>
    );
  }
}
