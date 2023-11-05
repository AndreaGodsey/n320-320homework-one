import React from 'react';
import styles from '@/styles/Hallowen.module.css';

export default function Halloween(props) {
    console.log(props);
    return (
        <>
        <div className={styles.halloweenad} style={{
            backgroundImage: `url(${props.halloweenImage})`}}></div>
        </>
    )
}