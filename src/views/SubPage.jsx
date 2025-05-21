import styles from '../styles/SubPage.module.css';
import wolf from '../assets/images/wolf.jpg';
import beetlesad from '../assets/images/beetlesad.png';
import SideBar from '../components/SideBar';
import SideNav from '../components/SideNav';
import InstaGallery from '../components/Instagallery';

export default function SubPage() {
  const themeList = [
    { name: 'Consent in Paradise', description: 'Discover how birds of paradise show boundaries, respect, and choice.', date: 'Jun - Aug 2025' },
    { name: 'Who Runs the Wild', description: 'Who’s the boss out here? Peek into animal politics, pack leaders, and jungle drama.', date: 'Sep - Nov 2025' },
    { name: 'Cleanup Instinct', description: 'Nature’s not messy for long! See how the wild cleans up, recycles, and starts fresh.', date: 'Dec 2025 - Feb 2026' },
  ];

  return (
    <div className={styles.pageLayout}>
      <div className={styles.sidebar}>
        <SideBar />
      </div>

      <main className={styles.mainContent}>
        <h1>Rituals of Nature</h1>
        <img src={wolf} alt="Rituals Of Nature" className={styles.heroImage} />
        <p className={styles.introductionText}><strong>Rituals in Nature invites</strong> visitors to explore the rhythms and behaviours of the natural world. 
          Through a layer of thoughtful digital stories, the exhibition highlights the connections and patterns 
          that make nature feel alive - sparking curiosity, reflection, and a deeper sense of belonging.</p>
        <p className={styles.introductionText}>Each season brings a new digital theme, making every visit unique - and only available for a limited time. 
          We explore pressing themes such as consent, politics, and sustainability - examining how these dynamics 
          are reflected, challenged, or mirrored in the natural world.</p>
        <p className={styles.introductionText}>Visitors are encouraged to slow down, tune in, and rediscover their place within the greater natural symphony.</p>

        <h2>Themes</h2>
        <div className={styles.cardContainer}>
          {themeList.map((theme, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.left}>
                  <div className={styles.date}><h4>{theme.date}</h4></div>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.right}>
                  <h3>{theme.name}</h3>
                  <p>{theme.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2>Where to find?</h2>
        <div className={styles.visitSection}>
          <p className={styles.visitText}>
            ‘Rituals of Nature’ is part of the ‘Global Backyard exhibition’ on 2nd floor.
            The Interactive Experience can be found on the main screen in the Cafeteria.
          </p>
          <button className={styles.visitButton}>Visit us</button>
        </div>
      </main>

      <div className={styles.rightColumn}>
        <div className={styles.sideNav}>
          <SideNav />
        </div>
        <div className={styles.advertisement}>
          <img src={beetlesad} alt='Beetles Exhibition Advertisement' className={styles.exhibitionAd} />
        </div>
        <div className={styles.instaGallery}>
          <h3>Naturhistorisk Museum on Instagram</h3>
          <InstaGallery />
        </div>
      </div>
    </div>
  );
}