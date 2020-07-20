import React from 'react';
import classes from './Info.module.css';
import userLogo from '../../../img/user.png';

const Info = ({profile}) => {
    const{aboutMe, contacts, lookingForAJob, fullName, photos} = profile;
    return (
        <div className={classes.info}>
            <div className={classes.img}>
                <img src={photos.large?photos.large:userLogo}/>
            </div>

            <div className={classes.about}>
                <span className={classes.name}>{fullName}</span>
                <span>{aboutMe}</span>
            </div>
        </div>
    )
}

export default Info;