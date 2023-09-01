import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Rock Fests 2023</p>
      <p>
        <Link href="/about">About this project</Link>
      </p>
    </footer>
  );
};

export default Footer;
