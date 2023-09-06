import FestsListMain from "@/components/FestsListMain";
import Layout from "@/components/Layout";
import { API_URL, PER_PAGE } from "@/config";
import { Fest, Meta } from "@/types";
import { GetServerSideProps } from "next";
import { FC } from "react";

const EventsPage: FC<{ fests: Fest[]; meta: Meta }> = ({ fests, meta }) => {
  console.log(fests);
  return (
    <Layout title="Events list">
      <FestsListMain fests={fests} meta={meta} />
    </Layout>
  );
};

export default EventsPage;

export const getServerSideProps: GetServerSideProps = async ({
  query: { page = 1 },
}) => {
  const res = await fetch(
    `${API_URL}/api/fests?populate=deep&pagination[pageSize]=${PER_PAGE}&pagination[page]=${page}&sort=date:asc`
  );
  const fests = await res.json();

  return {
    props: {
      fests: fests.data,
      meta: fests.meta,
    },
  };
};
