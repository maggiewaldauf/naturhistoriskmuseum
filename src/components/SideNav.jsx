import styles from '../styles/SideNav.module.css';
import openinghours from "../assets/icons/openinghours.svg";
import calendar from "../assets/icons/calendar.svg";
import info from "../assets/icons/info.svg";

export default function SideNav() {
  const navItems = [
    { label: 'Plan a Visit', icon: <img src={openinghours} alt="Opening Hours Icon" />},
    { label: 'Opening Hours', icon: <img src={calendar} alt="Calendar Icon" /> },
    { label: 'Practical Info', icon: <img src={info} alt="Info Icon" /> },
  ];

  return (
    <nav className={styles.sideNav}>
      {navItems.map((item, index) => (
        <div key={index} className={styles.navItem}>
          {item.icon}
          <span>{item.label}</span>
        </div>
      ))}
    </nav>
  );
}
