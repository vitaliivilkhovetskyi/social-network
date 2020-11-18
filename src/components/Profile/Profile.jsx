import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

// let s = {
//   'nav': 'Navbar_nav__1xbQU' - беремо назву з інспект коду. це просто для прикладу щоб я знав як цу працює,
//   'item': 'Navbar_item__-0wMg'
// }

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}

export default Profile;