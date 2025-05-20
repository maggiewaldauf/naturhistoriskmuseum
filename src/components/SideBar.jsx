import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from '../styles/Sidebar.module.css';
import expandIcon from '../assets/icons/expand.svg';

export default function Sidebar() {
  const location = useLocation();

  const isActiveSection = (pathPrefix) => location.pathname.startsWith(pathPrefix);

  const [openSections, setOpenSections] = useState({
  about: false,
  visit: false,
  mols: false,
  learning: false,
  collections: false,
  support: false,
  exhibitions: false, // <-- Add this
});

  useEffect(() => {
  setOpenSections((prev) => ({
    ...prev,
    about: isActiveSection('/about'),
    visit: isActiveSection('/visit'),
    mols: isActiveSection('/mols'),
    learning: isActiveSection('/learning'),
    collections: isActiveSection('/collections') || isActiveSection('/wolf') || isActiveSection('/naturlex') || isActiveSection('/research'),
    support: isActiveSection('/support'),
    exhibitions: isActiveSection('/exhibitions'), // <-- Add this
  }));
}, [location.pathname]);

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderLink = (to, label) => (
  <div className={`${styles.subLink} ${location.pathname === to ? styles.active : ''}`}>
    <img src={expandIcon} alt="Expand" className={styles.icon} />
    <Link to={to}>{label}</Link>
  </div>
);

  return (
    <nav className={styles.sidebar} role="navigation">
      <div className={styles.navList}>

        <div className={styles.mainLink}>
          <img src={expandIcon} alt="Expand" className={styles.icon} />
          <Link to="/naturhistoriskmuseum/">Home</Link>
        </div>

        <div>
          <button onClick={() => toggleSection('about')} role="button">
            <img src={expandIcon} alt="Expand" className={styles.icon} />
            About the Museum
          </button>
          {openSections.about && (
            <div>
              {renderLink('/about/who-are-we', 'Who Are We?')}
              {renderLink('/about/new-museum', 'New Museum')}
              {renderLink('/about/organisation', "Museum's Organisation")}
              {renderLink('/about/press', 'Press')}
            </div>
          )}
        </div>

        <div>
          <button onClick={() => toggleSection('visit')} role="button">
            <img src={expandIcon} alt="Expand" className={styles.icon} />
            Plan Your Visit
          </button>
          {openSections.visit && (
            <div>
              {renderLink('/visit/find-your-way', 'Find Your Way')}
              {renderLink('/visit/opening-hours', 'Opening Hours & Admissions')}
              {renderLink('/visit/cafe', 'Our Cafe')}
              {renderLink('/visit/shop', 'Shop and Webshop')}
            </div>
          )}
        </div>

        <div>
          <button onClick={() => toggleSection('exhibitions')} role="button">
            <img src={expandIcon} alt="Expand" className={styles.icon} />
            Exhibitions
          </button>
          {openSections.exhibitions && (
            <div>
              {renderLink('/exhibitions', 'Beetles')}
              {renderLink('/exhibitions/global-backyard', 'Future Man')}
              {renderLink('/exhibitions/savanna', 'The Global Backyard')}
              {renderLink('/exhibitions/savanna', 'Our Nature')}
              {renderLink('/exhibitions/beetles', 'Expedition til Africa')}
              {renderLink('/exhibitions/beetles', '99 arter')}
            </div>
          )}
        </div>

        <div className={styles.mainLink}>
          <img src={expandIcon} alt="Expand" className={styles.icon} />
          <Link to="/events">Events</Link>
        </div>

        <div>
          <button onClick={() => toggleSection('mols')} role="button">
            <img src={expandIcon} alt="Expand" className={styles.icon} />
            Explore Mols Lab
          </button>
          {openSections.mols && (
            <div>
              {renderLink('/mols/about', 'About Mols Lab')}
              {renderLink('/mols/events', 'Celebrate Your Event')}
              {renderLink('/mols/stay', 'Stay in Mols Laboratory')}
              {renderLink('/mols/rewilding', 'Rewilding Mols')}
              {renderLink('/mols/horses', 'Experience the Wild Horses')}
              {renderLink('/mols/visit', 'Visit Mols Lab')}
              {renderLink('/mols/area', 'The Area of Mols Lab')}
              {renderLink('/mols/green-branch', 'The Green Branch')}
            </div>
          )}
        </div>

        <div>
          <button onClick={() => toggleSection('learning')} role="button">
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
          <button onClick={() => toggleSection('collections')} role="button">
            <img src={expandIcon} alt="Expand" className={styles.icon} />
            Collections & Knowledge
          </button>
          {openSections.collections && (
            <div>
              {renderLink('/collections', 'Collections')}
              {renderLink('/wolf-in-denmark', 'Wolf in Denmark')}
              {renderLink('/naturlex', 'Naturlex')}
              {renderLink('/research', 'Research')}
            </div>
          )}
        </div>

        <div>
          <button onClick={() => toggleSection('support')} role="button">
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
