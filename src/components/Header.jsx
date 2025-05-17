import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import search from "../assets/icons/search.svg";
import burgermenu from "../assets/icons/burgermenu.svg";
import logo from "../assets/icons/logo.svg";
import styles from "../styles/Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  // Example search function - replace with your real search logic
  const performSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
    // Do something with the searchTerm, e.g., filter list or fetch results
  };

  // Debounce input to avoid firing search on every keystroke instantly
  useEffect(() => {
    if (!showSearch) return; // Only search if input is visible
    const handler = setTimeout(() => {
      if (query.trim() !== "") {
        performSearch(query.trim());
      }
    }, 300); // wait 300ms after user stops typing

    return () => clearTimeout(handler); // Cleanup debounce
  }, [query, showSearch]);

  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <Link to="/naturhistoriskmuseum/" className={styles.logo}>
          <img src={logo} alt="Museum Logo" />
        </Link>

        <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          <Link to="*">Visit us</Link>
          <Link to="*">Exhibitions</Link>
          <Link to="*">Mol's Laboratory</Link>
          <Link to="*">About</Link>
        </nav>

        <Link to="*" className={styles.langBtn}>Dansk</Link>

        <div className={`${styles.searchWrapper} ${showSearch ? styles.expanded : ""}`}>
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.searchInput}
            autoComplete="off"
          />
          <button
            type="button"
            onClick={() => setShowSearch(!showSearch)}
            className={styles.iconBtn}
            aria-label="Toggle search"
          >
            <img src={search} alt="Search Icon" className={styles.icon} />
          </button>
        </div>

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
