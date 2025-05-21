import { Link } from 'react-router-dom';
import styles from '../styles/SideNav.module.css';
import openinghours from "../assets/icons/openinghours.svg";
import calendar from "../assets/icons/calendar.svg";
import info from "../assets/icons/info.svg";

export default function SideNav() {
  const navItems = [
    { label: 'Plan a Visit', icon: openinghours, path: '/visit' },
    { label: 'Opening Hours', icon: calendar, path: '/visit/opening-hours' },
    { label: 'Practical Info', icon: info, path: '/visit/accessibility' },
  ];

  return (
    <nav className={styles.sideNav}>
      {navItems.map((item, index) => (
        <Link to={item.path} key={index} className={styles.navItem}>
          <img src={item.icon} alt={`${item.label} Icon`} className={styles.navIcon} />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
