import DashboardMain from "@/components/Account/DashboardMain";
import Layout from "@/components/Layout";
import { API_URL } from "@/config";
import { FestAttributes } from "@/types";
import { parseCookies } from "@/util";
import { GetServerSideProps } from "next";
import { FC } from "react";

const DashboardPage: FC<{ fests: FestAttributes[]; token: string }> = ({
  fests,
  token,
}) => {
  return (
    <Layout title="User Dashboard">
      <DashboardMain fests={fests} token={token} />
    </Layout>
  );
};

export default DashboardPage;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token } = parseCookies(req);

  const res = await fetch(`${API_URL}/api/users/me?populate=deep`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const fests = (await res.json()).fests;

  return {
    props: {
      fests,
      token,
    },
  };
};
