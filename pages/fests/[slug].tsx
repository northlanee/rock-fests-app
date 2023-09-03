import FestMain from "@/components/FestMain";
import Layout from "@/components/Layout";
import { API_URL } from "@/config";
import { Fest } from "@/types";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { FC } from "react";

const FestPage: FC<{ fest: Fest }> = ({ fest }) => {
  return (
    <Layout title="Fest page">
      <FestMain fest={fest} />
    </Layout>
  );
};

export default FestPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${API_URL}/api/fests`);
  const fests = (await res.json()) as Fest[];

  const paths = fests.map((e) => ({ params: { slug: e.slug } }));

  return {
    paths,
    fallback: true,
  };
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Params;
  const res = await fetch(`${API_URL}/api/fests/${slug}`);
  const fests = await res.json();

  return {
    props: {
      fest: fests[0],
      revalidate: 60,
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
