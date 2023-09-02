import Head from "next/head";
import { FC, ReactNode } from "react";
import { Inter } from "next/font/google";
import cn from "classnames";
import styles from "./Layout.module.scss";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Homepage/Banner";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

interface ILayout {
  title?: string;
  keywords?: string;
  description?: string;
  className?: string;
  children: ReactNode;
}

const Layout: FC<ILayout> = ({
  title,
  keywords,
  description,
  children,
  className,
}) => {
  const router = useRouter();

  return (
    <div className={cn(className, inter.className)}>
      <Head>
        <title>
          {title
            ? `${title} | Find actual rock fests`
            : "Rock Fests App | Find actual rock fests"}
        </title>
        <meta
          name="description"
          content={description || "Welcome to rock fests app"}
        />
        <meta
          name="keywords"
          content={keywords || "music, rock, fest, app, metalcore, alternative"}
        />
      </Head>
      <Header />
      {router.pathname === "/" && <Banner />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
