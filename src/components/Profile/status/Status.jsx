import React, {useState, useEffect} from 'react';
import c from './Status.module.css'

const Status = (props) => {

    const [editModal, setModal] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(()=> {
        setStatus(props.status)
    }, [props.status])

    const onModalShow = () => {
        setModal(true)
    }

    const deactivateModal = () => {
        setModal(false)
        props.changeStatus(status)
    }

    const onChangeText = (e) => {
        setStatus(e.target.value)
    }
    return (
        <div className={c.status}>
            {!editModal &&
                <div className={c.statusText}>
                    <span onDoubleClick={onModalShow}>{props.status || '-----'}</span>
                </div>
            }
            
            {editModal &&
                <div className={c.statusInput}>
                    <input 
                        autoFocus  
                        onBlur={ deactivateModal} 
                        type="text" 
                        value={status}
                        onChange={(e) => onChangeText(e)}/>
                </div>  
            }
        </div>
    )
       
}

export default Status