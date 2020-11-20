import React from 'react';
import s from './PostPost.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/280x178_2" alt='sd'></img>
      { props.message }
      <div>
        <span>like</span> { props.likesCount}
      </div>
    </div>   
  )   
}

export default Post;