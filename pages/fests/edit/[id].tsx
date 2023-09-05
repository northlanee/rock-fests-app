import EditFestMain from "@/components/EditFestMain";
import Layout from "@/components/Layout";
import { API_URL } from "@/config";
import { Fest } from "@/types";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { FC } from "react";

const EditPage: FC<{ fest: Fest }> = ({ fest }) => {
  return (
    <Layout title="Edit fest">{fest && <EditFestMain fest={fest} />}</Layout>
  );
};

export default EditPage;

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as Params;

  const res = await fetch(`${API_URL}/api/fests/${id}?populate=deep`);
  const resData = await res.json();

  if (!resData?.data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      fest: resData.data,
    },
  };
};
