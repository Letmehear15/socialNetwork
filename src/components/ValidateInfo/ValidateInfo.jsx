import React from 'react' ;
import c from './ValidateInfo.module.css';

export const ValidateInfoTextArea = ({input, meta, placeholder}) => {
    const{touched, error} = meta;
    return (
        <div>
            <textarea className={touched&&error?c.input:''}
                {...input} 
                placeholder={placeholder}/>
            {touched && error? <span className={c.error}>{error}</span>:null}
        </div>
    )
}

export const ValidateInfoInput = ({input, meta, placeholder, type}) => {
    const{touched, error} = meta;
    return (
        <div>
            <input 
                className={`${c.common} ${touched&&error&&c.input}`}
                {...input} 
                placeholder={placeholder}
                type={type}/>
            {touched && error && <span className={c.error}>{error}</span>}
        </div>
    )
}