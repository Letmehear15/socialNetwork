import React from 'react';
import classes from './Dialogs.module.css';
import Users from './Users/Users';
import Messages from './Messages/Messages';
import {Field, reduxForm} from 'redux-form'
import { ValidateInfoTextArea } from '../ValidateInfo/ValidateInfo';
import { required, maxLength } from '../../utils/Validate';

const maxLengthTextArea = maxLength(30);

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field 
                component={ValidateInfoTextArea} 
                validate={[required, maxLengthTextArea]}
                placeholder="Write a message"
                name="message" 
                type="text"/>
            <button>Send</button>
        </form>
    )
}

const MessageReduxForm = reduxForm({form:"message"})(MessageForm)

const Message = (props) => {
    const dialogsName = props.messages.dialogs.map( name => <Users id={name.id} name={name.name}/>);
    const messagesMsg = props.messages.messages.map( msg => <Messages msg={msg.msg}/>);

    const sendMsg = (value) => {
        props.addMsgActionCreater(value.message);
    }
    return (
        <div className={classes.container}>
            <div className={classes.dialogs}>
                {dialogsName}
            </div>
            
            <div className={classes.messages}>
                {messagesMsg}
                <MessageReduxForm onSubmit={sendMsg}/>
            </div>
        </div>
    )
}

export default Message;