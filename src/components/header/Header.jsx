import styles from './Header.module.css' 

export default function Header() {
  return(
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <p id={styles.welcome}>Welcome</p>
          <p id={styles.name}>I am Tarık</p>
          <p id={styles.location}>from Istanbul, Turkey</p>
        </div>
      </div>
    </>
  );
}