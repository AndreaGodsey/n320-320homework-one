import React from 'react';
import styles from '@/styles/Return.old.costumes.module.css';

export default function Returncostumes(props) {
    console.log(props);
    return (
        <>
       <div className={styles.halloweenreturn}>
    <section className={styles.halloweentitle}>
      <div className={styles.halloweendescrip}>Done With Your Costumes? Need to Return a Costume? We Gladly Accept Returns!</div>
    </section>
    <div className={styles.halloweendescriptwo}>*Are the Costumes Torn or Dirty? We Can Fix Them!</div>
    <input className={styles.explorebuttontwo} type="submit" value="Find a Location!" />
    </div>
        </>
    )
}