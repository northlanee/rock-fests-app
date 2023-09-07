import HomepageMain from "@/components/Homepage/HomepageMain";
import Layout from "@/components/Layout";
import { API_URL } from "@/config";
import { Fest } from "@/types";
import { FC } from "react";

const Home: FC<{ fests: Fest[] }> = ({ fests }) => {
  return (
    <Layout>
      <HomepageMain fests={fests} />
    </Layout>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const res = await fetch(
    `${API_URL}/api/fests?populate=deep&sort=date:asc&pagination[limit]=3`
  );
  const fests = await res.json();

  return {
    props: {
      fests: fests.data,
      // revalidate: 60,
    },
  };
};
