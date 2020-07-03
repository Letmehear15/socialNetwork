import React from 'react';
import classes from './Dialogs.module.css';
import Users from './Users/Users';
import Messages from './Messages/Messages'

const Message = (props) => {
    let dialogsName = props.messages.dialogs.map( name => <Users id={name.id} name={name.name}/>);
    let messagesMsg = props.messages.messages.map( msg => <Messages msg={msg.msg}/>);
    let myRef = React.createRef();

    let textMsg = () => {
        let text = myRef.current.value;
        props.textMsg(text);
    }

    let sendMsg = () => {
        props.sendMsg();
    }
    return (
        <div className={classes.container}>
            <div className={classes.dialogs}>
                {dialogsName}
            </div>
            
            <div className={classes.messages}>
                {messagesMsg}
                <textarea 
                    ref={myRef} 
                    value={props.messages.newMessage} 
                    onChange={textMsg}/>
                <button onClick = {sendMsg}>Send</button>
            </div>
        </div>
    )
}

export default Message;