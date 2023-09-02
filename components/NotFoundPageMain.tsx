import Layout from "./Layout";
import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";
import styles from "./NotFoundPageMain.module.scss";

const NotFoundPageMain = () => {
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h4>Sorry, there is nothing here.</h4>
        <Link href="/">Go back home</Link>
      </div>
    </Layout>
  );
};

export default NotFoundPageMain;
