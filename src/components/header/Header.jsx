import { useState } from 'react';
import styles from './Header.module.css' 
import { useRef } from 'react';
import { useEffect } from 'react';

export default function Header() {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  });


  return(
    <>
      <div className={styles.container}>
        <div className={styles.header} ref={ref} style={{top: `calc(50% - ${height / 2}px)`}}>
          {height ? null : null}
          <p id={styles.welcome}>Welcome</p>
          <p id={styles.name}>I am Tarık</p>
          <p id={styles.location}>from Istanbul, Turkey</p>
        </div>
      </div>
    </>
  );
}