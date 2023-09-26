import React from 'react';

import classes from './LoginCard.module.css';

const LoginCard = (props) => {
    return (
        <div className={classes['card-container']}>
            <div className={`${classes.card} ${props.className}`}>{props.children}</div>
        </div>
    );
};

export default LoginCard;
