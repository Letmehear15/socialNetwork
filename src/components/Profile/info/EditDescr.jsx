import React, { memo } from 'react';
import classes from './Info.module.css';
import { Field, reduxForm } from 'redux-form'
import { ValidateInfoInput } from '../../ValidateInfo/ValidateInfo';

const EditDescr = memo(
    ({contacts, handleSubmit, setEditMode, ...props}) => {
        const contactKeys = Object.keys(contacts);
        const contactItems = contactKeys.map(el => {
            return (
                <div className={classes.items} key={el}>
                    <div className={classes.item}><b>{el}</b>: </div>
                    <Field 
                        name={`contacts.${el}`} 
                        component={ValidateInfoInput} 
                        type="text"  
                        placeholder={el}/>
                </div>
            )
        })
        const {error} = props;
        debugger
        return (
            <form onSubmit={handleSubmit} className={classes.contacts}>
                <div className={classes.aboutMe}>
                    <span className={classes.title}> About me </span>
                    <Field name="aboutMe" component="textarea" type="text" placeholder="About me"/>
                </div>
                <div className={classes.aboutLinks}>
                    <span className={classes.title}> Looking for a job description </span>
                    <Field name="lookingForAJobDescription" component="textarea" type="text" placeholder="Looking for a job description"/>
                </div>
                {contactItems}
                {error? <span>Error</span>:null}
                <button className={classes.btn}>Save</button>
                <button className={classes.btn} onClick={() => setEditMode(false)}>Cancel</button>
            </form>
        )
    }
)

const EditDescrForm = reduxForm({form:'editDescr'})(EditDescr)

export default EditDescrForm;