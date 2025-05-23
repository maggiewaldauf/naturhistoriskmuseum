import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from '../styles/Sidebar.module.css';
import expandIcon from '../assets/icons/expand.svg';

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActiveSection = (pathPrefix) => location.pathname.startsWith(pathPrefix);

  const [openSections, setOpenSections] = useState({
    about: false,
    visit: false,
    mols: false,
    learning: false,
    collections: false,
    support: false,
    events: false,
    exhibitions: true, // Always open
  });

 useEffect(() => {
  setOpenSections((prev) => ({
    ...prev,
    about: isActiveSection('/about'),
    visit: isActiveSection('/visit'),
    mols: isActiveSection('/mols'),
    learning: isActiveSection('/learning'),
    collections: isActiveSection('/collections'),
    support: isActiveSection('/support'),
    events: isActiveSection('/events'),
    // exhibitions is always true, no need to update it
  }));
}, [location.pathname]);

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderLink = (to, label) => (
    <button
      className={`${styles.subLink} ${location.pathname === to ? styles.active : ''}`}
      onClick={() => navigate(to)}
    >
      <img src={expandIcon} alt="Expand" className={styles.icon} />
      {label}
    </button>
  );

  return (
    <nav className={styles.sidebar} role="navigation">
      <div className={styles.navList}>

        <button
          className={`${styles.mainLink} ${location.pathname === '/naturhistoriskmuseum/' ? styles.active : ''}`}
          onClick={() => navigate('/naturhistoriskmuseum/')}
        >
          <img src={expandIcon} alt="Expand" className={styles.icon} />
          Home
        </button>

        <div>
          <button
            className={styles.mainLink}
            onClick={() => toggleSection('about')}
          >
            <img src={expandIcon} alt="Expand" className={styles.icon} />
            About the Museum
          </button>
          {openSections.about && (
            <div>
              {renderLink('/about/who-are-we', 'Who Are We')}
              {renderLink('/about/new-museum', 'New Museum')}
              {renderLink('/about/museum-organisation', 'Museums Organization')}
              {renderLink('/about/press', 'Press')}
            </div>
          )}
        </div>

        <div>
          <button
            className={styles.mainLink}
            onClick={() => toggleSection('visit')}
          >
            <img src={expandIcon} alt="Expand" className={styles.icon} />
            Plan Your Visit
          </button>
          {openSections.visit && (
            <div>
              {renderLink('/visit/opening-hours', 'Opening Hours & Admissions')}
              {renderLink('/visit/find-your-way', 'Find Your Way')}
              {renderLink('/visit/cafe', 'Our Café')}
              {renderLink('/visit/webshop', 'Shop and Webshop')}
            </div>
          )}
        </div>

        <div>
          <button
            className={styles.mainLink}
            onClick={() => toggleSection('exhibitions')}
          >
            <img src={expandIcon} alt="Expand" className={styles.icon} />
            Exhibitions
          </button>
          {openSections.exhibitions && (
            <div>
              {renderLink('/exhibitions/beetles', 'Beetles')}
              {renderLink('/exhibitions/future-man', 'Future Man')}
              {renderLink('/exhibitions/global-backyard', 'The Global Backyard')}
              {renderLink('/exhibitions/our-nature', 'Our Nature')}
              {renderLink('/exhibitions/expedition-til-africa', 'Expedition til Africa')}
              {renderLink('/exhibitions/99arter', '99 Arter')}
              {renderLink('/naturhistoriskmuseum/ritualsofnature', 'Rituals Of Nature')}
            </div>
          )}
        </div>

        <div>
          <button
            className={styles.mainLink}
            onClick={() => toggleSection('events')}
          >
            <img src={expandIcon} alt="Expand" className={styles.icon} />
            Events
          </button>
          {openSections.events && (
            <div>
              {renderLink('/events/upcoming', 'Upcoming Events')}
              {renderLink('/events/past', 'Past Events')}
            </div>
          )}
        </div>

        <div>
          <button
            className={styles.mainLink}
            onClick={() => toggleSection('mols')}
          >
            <img src={expandIcon} alt="Expand" className={styles.icon} />
            Explore Mols Lab
          </button>
          {openSections.mols && (
            <div>
              {renderLink('/mols/aboutmols', 'About Mols Lab')}
              {renderLink('/mols/celebrateevent', 'Celebrate Your Event')}
              {renderLink('/mols/stay', 'Stay in Mols Laboratory')}
              {renderLink('/mols/rewilding', 'Rewilding Mols')}
              {renderLink('/mols/wildhorses', 'Experience the Wild Horses')}
              {renderLink('/mols/visit', 'Visit Mols Lab')}
              {renderLink('/mols/wildhorses', 'The Area of Mols Lab')}
              {renderLink('/mols/visit', 'The Green Branch')}
            </div>
          )}
        </div>

        <div>
          <button
            className={styles.mainLink}
            onClick={() => toggleSection('learning')}
          >
            <img src={expandIcon} alt="Expand" className={styles.icon} />
            Learning & Schools
          </button>
          {openSections.learning && (
            <div>
              {renderLink('/learning/schools', 'For Schools & Institutions')}
            </div>
          )}
        </div>

        <div>
          <button
            className={styles.mainLink}
            onClick={() => toggleSection('collections')}
          >
            <img src={expandIcon} alt="Expand" className={styles.icon} />
            Collections & Knowledge
          </button>
          {openSections.collections && (
            <div>
              {renderLink('/collections/overview', 'Collections')}
              {renderLink('/wolf', 'Wolf in Denmark')}
              {renderLink('/naturlex', 'NaturLex')}
              {renderLink('/research', 'Research')}
            </div>
          )}
        </div>

        <div>
          <button
            className={styles.mainLink}
            onClick={() => toggleSection('support')}
          >
            <img src={expandIcon} alt="Expand" className={styles.icon} />
            Support Us
          </button>
          {openSections.support && (
            <div>
              {renderLink('/support/donations', 'Donations')}
            </div>
          )}
        </div>

        

      </div>
    </nav>
  );
}
