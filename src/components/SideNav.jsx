import styles from '../styles/SideNav.module.css';
import openinghours from "../assets/icons/openinghours.svg";
import calendar from "../assets/icons/calendar.svg";
import info from "../assets/icons/info.svg";

export default function SideNav() {
  const navItems = [
    { label: 'Plan a Visit', icon: openinghours },
    { label: 'Opening Hours', icon: calendar },
    { label: 'Practical Info', icon: info },
  ];

  return (
    <nav className={styles.sideNav}>
      {navItems.map((item, index) => (
        <div key={index} className={styles.navItem}>
          <img src={item.icon} alt={`${item.label} Icon`} className={styles.navIcon} />
          <span>{item.label}</span>
        </div>
      ))}
    </nav>
  );
}