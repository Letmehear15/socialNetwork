import React, { memo } from 'react';
import classes from './Info.module.css';
import userLogo from '../../../img/user.png';
import { useState } from 'react';
import Loader from '../../Loader/Loader';
import { useEffect } from 'react';

const Info = memo(({profile, changePhoto, params}) => {
    const{photos} = profile;

    const [isLoad, setLoad] = useState(false);
    const [onMouse, setOnMouse] = useState(false)
    useEffect(() => setLoad(false),[photos.large])

    const onSave = (e) => {
        if(e.target.files.length) {
            setLoad(true)
            changePhoto(e.target.files[0])
        }
    }
    return (
        <div className={classes.info}>
            <div className={classes.left}>
                {isLoad&&<Loader/>}
                {!isLoad&&
                    <div 
                        className={classes.img} 
                        onMouseEnter={() => setOnMouse(true)}
                        onMouseLeave={() => setOnMouse(false)}
                    >
                        <img src={photos.large?photos.large:userLogo} alt='largePhoto'/>
                        <input className={classes.upLoad} id="upload" type="file" onChange={onSave}/>

                        <div className={params.id?classes.none:''}>
                            <label 
                                htmlFor="upload" 
                                className={`${classes.labelUpload} ${onMouse?classes.active:''}`}>
                                    Upload Photo
                            </label>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
})

export default Info;