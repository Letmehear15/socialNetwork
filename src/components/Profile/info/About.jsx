import React,{useState} from 'react';
import Status from '../status/Status';
import classes from './Info.module.css';
import EditDescr from './EditDescr';

const About = ({profile, status, changeStatus, updateProfile, myId, params}) => {

    const {aboutMe, fullName, contacts, lookingForAJobDescription} = profile;

    const[editMode, setEditMode] = useState(false)

    const onSubmit = (values) => {
        // setEditMode(false)
        updateProfile(values, myId)
    }
    return (
        <div>
            <span className={classes.name}>{fullName}</span> <br/>
            <Status status={status} changeStatus={changeStatus}/>
            {editMode
                ?<EditDescr 
                    initialValues={profile} 
                    onSubmit={onSubmit} 
                    contacts={contacts}
                    setEditMode={setEditMode}/> 
                :<AboutUser 
                    setEditMode={setEditMode} 
                    contacts={contacts} 
                    aboutMe={aboutMe} 
                    lookingForAJobDescription={lookingForAJobDescription}
                    params={params}/>
            }
        </div>
    )
}

const AboutUser = ({contacts, aboutMe, setEditMode, lookingForAJobDescription, params}) => {
    const contactKeys = Object.keys(contacts);
    const contactItems = contactKeys.map(el => {
        if(contacts[el])
        return (
            <div className={classes.items} key={el}>
                <div className={classes.item}><b>{el}</b>: </div>
                <span className={classes.contact}>{contacts[el]}</span>
            </div>
        )
        else return null
    })
    return (
        <div className={classes.contacts}>
            <div className={classes.aboutMe}>
                <span className={classes.title}> <b>About me</b>: </span>
                <span className={classes.aboutMeDescr}>{aboutMe}</span>
            </div>
            <div className={classes.aboutLinks}>
                <span className={classes.title}> <b>Looking for a job description: </b> </span>
                <span className={classes.aboutMeDescr}>{lookingForAJobDescription}</span>
            </div>
            {contactItems}
            {!params.id && <button className={classes.editBtn} onClick={() => setEditMode(true)}>Edit description</button>}
        </div>
    )
}

export default About;