import React from 'react';
import s from './FriendsInfo.module.css';

const FriendsInfo = () => {
    return (
        <div>
            <div>
                <img src='https://theicon.ua/local/templates/main/img/new-logo.jpg' alt='I'></img>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}

export default FriendsInfo;