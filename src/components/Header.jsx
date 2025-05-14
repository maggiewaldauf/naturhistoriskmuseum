import { useState } from "react";
import { Link } from "react-router-dom";
import search from "../assets/icons/search.svg";
import burgermenu from "../assets/icons/burgermenu.svg";
import logo from "../assets/icons/logo.svg";
import styles from "../styles/Header.module.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Museum Logo" />
        </Link>

        {/* Desktop nav between logo and language button */}
        <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          <Link to="/">Home</Link>
          <Link to="*">Visit us</Link>
          <Link to="*">Exhibitions</Link>
          <Link to="*">Mol's Laboratory</Link>
          <Link to="*">About</Link>
        </nav>

        <Link to="*" className={styles.langBtn}>Dansk</Link>

        <img src={search} alt="Search Icon" className={styles.icon} />

        <button
          className={styles.burgerBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <img src={burgermenu} alt="Burger Menu Icon" className={styles.icon} />
        </button>
      </div>
    </header>
  );
}
