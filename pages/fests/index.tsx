import FestsListMain from "@/components/FestsListMain";
import Layout from "@/components/Layout";
import { API_URL } from "@/config";
import { Fest } from "@/types";
import { FC } from "react";

const EventsPage: FC<{ fests: Fest[] }> = ({ fests }) => {
  return (
    <Layout title="Events list">
      <FestsListMain fests={fests} />
    </Layout>
  );
};

export default EventsPage;

export const getStaticProps = async () => {
  const res = await fetch(`${API_URL}/api/fests?populate=deep&sort=date:desc`);
  const fests = await res.json();

  return {
    props: {
      fests: fests.data,
      revalidate: 60,
    },
  };
};
