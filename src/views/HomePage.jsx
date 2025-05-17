import { Link } from 'react-router-dom';
import styles from '../styles/HomePage.module.css';
import exhibitions from '../assets/images/exhibitions.png';
import events from '../assets/images/events.png';
import naturhistoriskvideo from '../assets/videos/naturhistoriskvideo.mp4';
import next from '../assets/icons/next.svg';
import nexthover from '../assets/icons/nexthover.svg';
import SideNav from '../components/SideNav';

export default function HomePage() {
  const cardList = [
    { name: 'Exhibitions', image: exhibitions, link: '*'},
    { name: 'Events', image: events, link: '*'},
  ];

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <video className={styles.heroVideo} autoPlay muted loop playsInline>
          <source src={naturhistoriskvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.overlay}>
          <h1 className={styles.title}>Naturhistorisk Museum</h1>
        </div>
      </div>

      <section className={styles.cardsSection}>
        <ul className={styles.cardList}>
          {cardList.map((card, index) => (
            <li key={index} className={styles.card}>
              <img src={card.image} alt={card.name} className={styles.cardImage} />
              <div className={styles.cardContent}>
  <p className={styles.cardText}>{card.name}</p>
  <Link to={card.link} className={styles.iconWrapper}>
    <img
      src={next}
      alt="Next Icon"
      className={`${styles.iconNext} ${styles.iconNormal}`}
    />
    <img
      src={nexthover}
      alt="Next Icon Hover"
      className={`${styles.iconNext} ${styles.iconHover}`}
    />
  </Link>
</div>

            </li>
          ))}

          <li className={`${styles.card} ${styles.sideNavCard}`}> {/*descriptive class since no ids in modules*/}
            <SideNav />
          </li>
        </ul>
      </section>
    </div>
  );
}