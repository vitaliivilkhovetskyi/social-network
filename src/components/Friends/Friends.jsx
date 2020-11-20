import React from 'react';
import FriendsInfo from "./FriendsInfo/FriendsInfo";
import TheirPosts from "./TheirPosts/TheirPosts";


const Friends = (props) => {

    return (
        <div>
            <FriendsInfo />
            <TheirPosts postsSiteBar={props.state.postsSiteBar}/>
        </div>
    )
}

export default Friends;