import React from 'react'
import classes from './Notification.module.css';


const Notification = (props) => {
    let additionalClasses = '';

    if (props.status === 'error') {
        additionalClasses = classes.error
    };
    if (props.status === 'success') {
        additionalClasses = classes.success
    };

    const allClasses = `${classes.notification} ${additionalClasses}`;


    return (
        <section className={allClasses}>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
        </section>
    )
}

export default Notification