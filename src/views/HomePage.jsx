import { Link } from 'react-router-dom';
import styles from '../styles/HomePage.module.css';
import exhibitions from '../assets/images/exhibitions.jpg';
import events from '../assets/images/events.jpg';
import rituals from '../assets/images/ritualsofnature.png';
import donations from '../assets/images/donations.jpg';
import wolf from '../assets/images/wolf.jpg';
import rewildingmols from '../assets/images/mols.jpg';
import growingreen from '../assets/images/growingreen.png';
import naturhistoriskvideo from '../assets/videos/naturhistoriskvideo.mp4';
import next from '../assets/icons/next.svg';
import nexthover from '../assets/icons/nexthover.svg';
import arrowright from '../assets/icons/arrowright.svg';
import SideNav from '../components/SideNav';

export default function HomePage() {
  // Define card items
  const cardList = [
    { name: 'Exhibitions', image: exhibitions, link: '*' },
    { name: 'Events', image: events, link: '*' },
    { name: 'NEW - Rituals of Nature', image: rituals, link: 'ritualsofnature' },
    { name: 'Donations', image: donations, link: '*' },
    { name: 'Wolf in Denmark', image: wolf, link: '*' },
    { name: 'Rewilding Mols', image: rewildingmols, link: '*' },
    { name: 'The Green Branch', image: growingreen, link: '*' },
  ];

  // Insert the SideNav card into the third position (index 2)
  const cardItems = [...cardList];
  cardItems.splice(2, 0, { isSideNav: true });

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <video className={styles.heroVideo} autoPlay muted loop playsInline>
          <source src={naturhistoriskvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.overlay}>
          <h1 className={styles.title}>The Natural History Museum</h1>
          {/* CTA Button */}
          <Link to="/visit" className={styles.ctaButton}>
            Visit Us
            <img src={arrowright} alt="Arrow Icon" className={styles.ctaIcon} />
          </Link>
        </div>
      </div>

      <section className={styles.cardsSection}>
  <div className={styles.cardList}>
    {cardItems.map((card, index) =>
      card.isSideNav ? (
        <div
          key={index}
          className={`${styles.card} ${styles.sideNavCard}`}
        >
          <SideNav />
        </div>
      ) : (
        <Link
          to={card.link}
          key={index}
          className={`${styles.card} ${styles.cardLink}`} // Add a .cardLink style if needed
        >
          <img
            src={card.image}
            alt={card.name}
            className={styles.cardImage}
          />
          <div className={styles.cardContent}>
            <p className={styles.cardText}>{card.name}</p>
            <div className={styles.iconWrapper}>
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
            </div>
          </div>
        </Link>
      )
    )}
  </div>
</section>
    </div>
  );
}