import styles from './AboutMe.module.css'
import photo from './../../assets/photo.jpg'

export default function AboutMe() {
  return(
    <>
      <div className={styles.container}>
        <img src={photo} alt="photo" />
        <p className={styles.text}>I'm Tarık and I live in Istanbul, Turkey. I'm 20 and this is my third year as a computer science major. I'm interested in cloud technologies such as AWS, Azure and GCP. I also enjoy learning infrastructure as code (IaC) tools like Terraform. I love Golang. I'm trying to learn Norwegian as well. Fun fact: I love solving Rubik's cubes no matter the size!</p>
      </div>
    </>
  );
}