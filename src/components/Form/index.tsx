import React, {FC, ReactNode} from 'react';
import cn from 'classnames';

import styles from './form.module.css';

interface FormProperty {
    className?: string;
    children?: ReactNode
}

const Form: FC<FormProperty> = ({ className, children }) =>  (
    <form className={cn(styles.form, className)}>{children}</form>
);

interface FormLabelProperty {
    type: 'success' | 'error';
    className?: string;
    children?: ReactNode;
}

export const FormLabel: FC<FormLabelProperty> = ({ className, children }) => (
    <label className={cn(styles.label, className)}>{children}</label>
);

export default Form;