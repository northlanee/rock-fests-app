import { FC } from "react";
import { Fest } from "@/types";
import Link from "next/link";
import FestItem from "../FestItem";

const HomepageMain: FC<{ fests: Fest[] }> = ({ fests }) => {
  return (
    <>
      <h1>Upcoming Fests</h1>
      {fests.length === 0 && <h3>No fests to show</h3>}

      {fests.map((fest) => (
        <FestItem key={fest.id} fest={fest} />
      ))}

      {fests.length > 0 && (
        <Link href="/fests" className="btn-secondary">
          View all fests
        </Link>
      )}
    </>
  );
};

export default HomepageMain;
