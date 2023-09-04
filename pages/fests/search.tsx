import Layout from "@/components/Layout";
import { API_URL } from "@/config";
import { Fest } from "@/types";
import { FC } from "react";
import { GetServerSideProps } from "next";
import qs from "qs";
import SearchPageMain from "@/components/Search/SearchPageMain";

const SearchPage: FC<{ fests: Fest[] }> = ({ fests }) => {
  return (
    <Layout title="Search results">
      <SearchPageMain fests={fests} />
    </Layout>
  );
};

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async ({
  query: { term },
}) => {
  const query = qs.stringify({
    filters: {
      $or: [
        { name: { $contains: term } },
        { performers: { $contains: term } },
        { description: { $contains: term } },
        { venue: { $contains: term } },
      ],
    },
  });

  const res = await fetch(
    `${API_URL}/api/fests?populate=deep&sort=date:desc&${query}`
  );
  const fests = await res.json();

  return {
    props: {
      fests: fests.data,
    },
  };
};
