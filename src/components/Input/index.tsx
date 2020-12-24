import React, { FC } from 'react';
import cn from 'classnames';

import styles from './input.module.css';

interface InputProperty {
    className?: string;
}

const Input: FC<InputProperty> = ({ className }) => (
    <input className={cn(styles.input, className)} />
)

export default Input;