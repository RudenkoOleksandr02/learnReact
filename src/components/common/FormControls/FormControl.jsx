import React from "react";
import styles from './FormControl.module.css';
import {required} from "../../../utils/validate";
import {Field} from "redux-form";

export const FormControl = ({input, meta: {touched, error}, tag, placeholder = null, type = 'text', text= ''}) => {
    const hasError = touched && error;

    return <div>
        {React.createElement(tag, {
            placeholder, ...input, type,
            className: `${styles.formControl} ${hasError ? styles.error : ''}`
        })} {text}
        {hasError && <span className={styles.messageError}>{error}</span>}
    </div>
}

export const createField = (tag, name, placeholder, props) => {
    return <div>
        <Field tag={tag}
               name={name}
               placeholder={placeholder}
               component={FormControl}
               {...props}/>
    </div>
}
