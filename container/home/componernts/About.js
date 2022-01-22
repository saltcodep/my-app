import styles from './Default.module.css'

function About() {
  return (
    <section className={styles.s2}>
      <div className={styles.maincontainer}>
        <div className={styles.aboutwrapper}>
          <div className={styles.aboutme}>
            <h4>More about me</h4>
            <p>text</p>
            <p>text</p>
            <hr />
            <h4>TOP EXPERTISE</h4>
            <p>
              Fullstack Develiper
              <a target={'_blank'} href="">
                Download Resume
              </a>
            </p>
            <div id={styles.skills}>
              <ul>
                <li>JAVA</li>
                <li>JavaScript</li>
                <li>PHP</li>
                <li>HTML</li>
                <li>C#</li>
              </ul>
              <ul>
                <li>JAVA</li>
                <li>JavaScript</li>
                <li>PHP</li>
                <li>HTML</li>
                <li>C#</li>
              </ul>
            </div>
          </div>
          <div className={styles.sociallinks}>
            <img id={styles.social_img} src="" />
            <h3>Find me </h3>
            <a target={'_blank'} href="">
              Facebook
            </a>
            <br />
            <a target={'_blank'} href="">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
