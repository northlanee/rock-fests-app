import { Fest, Meta } from "@/types";
import { FC } from "react";
import FestItem from "./FestItem";
import Pagination from "./Pagination";

const FestsListMain: FC<{ fests: Fest[]; meta: Meta }> = ({ fests, meta }) => {
  return (
    <div>
      {fests.map((f) => (
        <FestItem key={f.id} fest={f} />
      ))}
      <Pagination meta={meta} />
    </div>
  );
};

export default FestsListMain;
