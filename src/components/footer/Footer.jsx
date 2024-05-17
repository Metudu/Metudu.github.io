import { IconContext } from 'react-icons';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import styles from './Footer.module.css'

export default function Footer(){
  return(
    <>
      <IconContext.Provider value={{style: {verticalAlign: 'middle'}}}>
        <div className={styles.container}>
          <p>Reach me out!</p>
          <div className="icons">
            <a href="https://www.linkedin.com/in/tarik-ucar/" rel='noreferrer noopener' target='_blank'><FaLinkedin></FaLinkedin></a>
            <a href="https://www.instagram.com/metudu_/" rel='noreferrer noopener' target='_blank'><FaInstagram></FaInstagram></a>
            <a href="https://github.com/Metudu" rel='noreferrer noopener' target='_blank'><FaGithub></FaGithub></a>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}