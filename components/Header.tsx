import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Rock Fests</Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/fests">Fests</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
