import Link from "next/link";
import styles from "./Header.module.scss";
import Search from "./Search/Search";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Rock Fests</Link>
      </div>

      <Search />

      <nav>
        <ul>
          <li>
            <Link href="/fests">Fests</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link href="/fests/add">Add Fest</Link>
              </li>
              <li>
                <Link href="/account/dashboard">Dashboard</Link>
              </li>
              <li>
                <button
                  className="btn-secondary btn-icon"
                  onClick={() => logout()}
                >
                  <FaSignOutAlt />
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/account/login" className="btn-secondary btn-icon">
                  <FaSignInAlt />
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
