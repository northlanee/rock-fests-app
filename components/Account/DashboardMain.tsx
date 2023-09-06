import { FC } from "react";
import styles from "./DashboardMain.module.scss";
import { FestAttributes } from "@/types";
import DashboardFest from "./DashboardFest";
import { API_URL } from "@/config";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const DashboardMain: FC<{ fests: FestAttributes[]; token: string }> = ({
  fests,
  token,
}) => {
  const router = useRouter();

  const deleteFest = async (id: number) => {
    if (confirm("Are you sure?")) {
      const res = await fetch(`${API_URL}/api/fests/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const festRes = await res.json();

      if (!festRes?.data) {
        toast.error("Something went wrong");
      } else {
        router.push("/account/dashboard");
      }
    }
  };

  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <h3>My fests</h3>
      {fests.map((f, idx) => {
        return <DashboardFest key={idx} fest={f} handleDelete={deleteFest} />;
      })}
    </div>
  );
};

export default DashboardMain;
