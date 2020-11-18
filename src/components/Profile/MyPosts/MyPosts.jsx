import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

// let s = {
//   'nav': 'Navbar_nav__1xbQU' - беремо назву з інспект коду. це просто для прикладу щоб я знав як цу працює,
//   'item': 'Navbar_item__-0wMg'
// }

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'hi, how are you. i`m', likesCount: 12},
        {id: 1, message: 'its my first post', likesCount: 11}
    ]
    let postsElements = posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>);
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

export default MyPosts;