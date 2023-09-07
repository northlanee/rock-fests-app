import FestDetailsMain from "@/components/FestDetailsMain";
import Layout from "@/components/Layout";
import { API_URL } from "@/config";
import { Fest } from "@/types";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { FC } from "react";

const FestDetailsPage: FC<{ fest?: Fest }> = ({ fest }) => {
  return (
    <Layout title="Fest page">{fest && <FestDetailsMain fest={fest} />}</Layout>
  );
};

export default FestDetailsPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${API_URL}/api/fests`);
  const fests = (await res.json()) as { data: Fest[] };

  const paths = fests.data.map((e) => ({
    params: { slug: e.attributes.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getServerSideProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Params;

  const res = await fetch(
    `${API_URL}/api/fests?populate=deep&filters[slug][$eq]=${slug}`
  );
  const fests = await res.json();

  if (!fests?.data[0]) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      fest: fests.data[0],
      // revalidate: 60,
    },
  };
};

// export const getServerSideProps: GetServerSideProps = async ({
//   query: { slug },
// }) => {
//   const res = await fetch(`${API_URL}/api/fests/${slug}`);
//   const fests = await res.json();

//   return {
//     props: {
//       fest: fests[0],
//     },
//   };
// };
