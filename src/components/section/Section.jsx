import styles from './Section.module.css'

export default function Section(props) {
  return(
    <>
      <div className={styles.container}>
        {props.image != null ? <img src={props.image} alt="image" /> : null}
        <div className={styles.text}>
          <p className={styles.header}><a href={props.link} rel='noreferrer noopener' target='_blank'>{props.header}</a></p>
          <hr />
          <p className={styles.paragraph}>{props.paragraph}</p>
        </div>
      </div>
    </>
  );
}