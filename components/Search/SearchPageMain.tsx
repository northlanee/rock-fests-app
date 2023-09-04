import { Fest } from "@/types";
import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import FestItem from "../FestItem";

const SearchPageMain: FC<{ fests: Fest[] }> = ({ fests }) => {
  const router = useRouter();

  return (
    <div>
      <Link href="/fests">{"<"} Go Back</Link>
      <h1>Search results for {router.query.term}</h1>
      {fests.map((f) => (
        <FestItem key={f.id} fest={f} />
      ))}
    </div>
  );
};

export default SearchPageMain;
