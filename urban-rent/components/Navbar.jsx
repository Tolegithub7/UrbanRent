import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="UrbanRent Logo" />
      </div>
      <input type="text" className={styles.search} placeholder="Search home here" />
      <ul className={styles.menu}>
        <li><Link href="/properties">Properties</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><button className={styles.signIn}>Sign in</button></li>
        <li><button className={styles.register}>Register</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
