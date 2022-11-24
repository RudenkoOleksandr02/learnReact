import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return <div className={s.item}>
			<img src="http://c.files.bbci.co.uk/17B2C/production/_117586079_avatar_getty.jpg" />
      {props.message} <br />
			{props.likesCount}
        
      </div>
}

export default Post;