import styles from './Default.module.css'

function NewsPage() {
  return (
    <section className={styles.s1}>
      <div className={styles.maincontainer}>
        <div className={styles.greetingwrapper}>
          <h1>Hi, I'm Pacharapawit Mukdapilom</h1>
        </div>
        <div className={styles.introwrapper}>
          <div className={styles.navwrapper}>
            <div className={styles.dotswrapper}>
              <div id={styles.dot1} className={styles.browserdot}></div>
              <div id={styles.dot2} className={styles.browserdot}></div>
              <div id={styles.dot3} className={styles.browserdot}></div>
            </div>
            <ul id={styles.navigation}>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className={styles.leftcolumn}>
            <img id={styles.profile_pic} src="images/" />
            <h5 style={{ textAlign: 'center', lineHeight: 0 }}>
              Personalize Theme
            </h5>
            <div id={styles.themeoptionswrapper}>
              <div id={styles.lightmode} className={styles.themedot}></div>
              <div id={styles.bluemode} className={styles.themedot}></div>
              <div id={styles.greenmode} className={styles.themedot}></div>
              <div id={styles.purplemode} className={styles.themedot}></div>
            </div>
            <p id={styles.settings_note}>
              *Theme settings will be saved for
              <br />
              your next vist
            </p>
          </div>
          <div className={styles.rightcolumn}>
            <div id={styles.preview_shadow}>
              <div id={styles.preview}>
                <div id={styles.corner_tl} className={styles.corner}></div>
                <div id={styles.corner_tr} className={styles.corner}></div>
                <h3>What I Do</h3>
                <p>
                  I was a lead developer in a past life, now I enjoy teching
                  coures.
                </p>
                <div id={styles.corner_br} className={styles.corner}></div>
                <div id={styles.corner_bl} className={styles.corner}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsPage
