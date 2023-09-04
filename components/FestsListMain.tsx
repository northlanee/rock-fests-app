import { Fest } from "@/types";
import { FC } from "react";
import FestItem from "./FestItem";

const FestsListMain: FC<{ fests: Fest[] }> = ({ fests }) => {
  return (
    <div>
      {fests.map((f) => (
        <FestItem key={f.id} fest={f} />
      ))}
    </div>
  );
};

export default FestsListMain;
