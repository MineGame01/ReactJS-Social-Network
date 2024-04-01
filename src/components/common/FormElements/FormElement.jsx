import React from 'react';
import styles from './FormElement.module.scss'

const FormElement = (props) => {
    const {children, meta} = props
    return <div className={styles.body}>
        <div className={styles.body__textArea}>
            {children}
        </div>
        <div className={styles.body__messageSpan}>
            {meta.touched && ((meta.error && <span>{meta.error}</span>) || (meta.warning && <span>{meta.warning}</span>))}
        </div>
    </div>
}

export const TextArea = ({input, ...props}) => {
    return <FormElement {...props} ><textarea {...input} {...props} /></FormElement>
}

export const Input = ({input, ...props}) => {
    return <FormElement {...props} ><input {...input} {...props} /></FormElement>
}