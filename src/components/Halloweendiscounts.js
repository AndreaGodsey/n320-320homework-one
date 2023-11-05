import React from 'react';
import styles from '@/styles/Halloween.discounts.module.css';

export default function Halloweendiscounts(props) {
    console.log(props);
    return (
        <>
    <div className={styles.halloweendiscounts}>
    <section className={styles.halloweentitle}>
      <div className={styles.halloweendescrip}>October 1st to October 30th Save Up to 50% on Select Costumes</div>
    </section>
    </div>
        
         </>
    )
}