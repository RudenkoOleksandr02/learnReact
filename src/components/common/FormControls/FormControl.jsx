import React from "react";
import styles from './FormControl.module.css';

export const FormControl = ({input, meta, tag, placeholder}) => {
    const hasError = meta.touched && meta.error;

    return <div>
        {React.createElement(tag, {
            placeholder, ...input,
            className: `${styles.formControl} ${hasError ? styles.error : ''}`
        })}
        {hasError && <span className={styles.messageError}>{meta.error}</span>}
    </div>
}
