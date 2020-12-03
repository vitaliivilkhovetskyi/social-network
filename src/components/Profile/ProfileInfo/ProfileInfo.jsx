import React from 'react';
import s from '../../Friends/FriendsInfo/FriendsInfo.module.css';
import Prealoader from "../../common/Prealoader/Prealoader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Prealoader />
    }

    return (
        <div>
            <div>
                <img src='https://theicon.ua/local/templates/main/img/new-logo.jpg' alt='I'></img>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;