import AddFestMain from "@/components/AddFestMain";
import Layout from "@/components/Layout";
import { parseCookies } from "@/util";
import { GetServerSideProps } from "next";
import { FC } from "react";

const AddFestPage: FC<{ token: string }> = ({ token }) => {
  return (
    <Layout title="Add fest">
      <AddFestMain token={token} />
    </Layout>
  );
};

export default AddFestPage;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token } = parseCookies(req);

  return {
    props: {
      token,
    },
  };
};
