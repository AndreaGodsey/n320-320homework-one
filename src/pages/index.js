import React from 'react';
import styles from '@/styles/Home.module.css';
import Halloween from '@/components/Halloweenad';
import Halloweendiscounts from '@/components/Halloweendiscounts';
import Halloweendiscountsimage from '@/components/Halloweendiscountsimage';
import Returncostumesimage from '@/components/Halloweenreturnimage';
import Returncostumes from '@/components/Returnoldcostumes';
export default function HOME(){
  return (
    <>
   
    <nav className={styles.naviDecoration}>
    <a className={styles.naviLinksDecoration} href="#">Home</a>
    <a className={styles.naviLinksDecoration} href="#">About</a>
    <a className={styles.naviLinksDecoration} href="#">Products</a>
    <a className={styles.naviLinksDecoration} href="#">Contact</a>
    </nav>
     
    <Halloween halloweenImage='/halloweenpumpkin.jpg' />


    <Halloweendiscounts/>

    <Halloweendiscountsimage halloweenImage='/halloweensale.jpg' />
   
    <Returncostumes />

    <Returncostumesimage halloweenImage='returningcostumes.jpg' />

    <div className={styles.footer}>
    <div className={styles.copyrighttitle}>Halloween Celebrations Inc.</div>
    <div className={styles.copyright}>©Copyright 2023</div>
    </div>

    </>

  );
}
