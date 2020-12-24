import React, { FC, ReactNode } from 'react';
import cn from 'classnames';

import styles from './button.module.css';

interface ButtonProperty {
    className?: string;
    children?: ReactNode
}

const Button: FC<ButtonProperty> = ({ className, children }) => (
    <button className={cn(styles.button, className)}>{children}</button>
)

export default Button;