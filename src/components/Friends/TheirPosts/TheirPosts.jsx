import React from 'react';
import s from './TheirPosts.module.css';
import Post from './PostPost/PostPost';


const TheirPosts = (props) => {


    let postsElements = props.postsSiteBar.map(postsSiteBar => <Post message={postsSiteBar.message} likesCount={postsSiteBar.likesCount}/>);
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default TheirPosts;