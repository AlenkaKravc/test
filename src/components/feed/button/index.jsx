import React from 'react';
import styles from './styles.scss';

export const Button = ({text = "", width = "100%", onClick}) => (
    <div className={styles.button} style={{width: width}} onClick={() => onClick()}>
        {text}
    </div>
);

