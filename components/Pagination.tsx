import { Meta } from "@/types";
import { FC } from "react";
import Link from "next/link";

const Pagination: FC<{ meta: Meta }> = ({ meta }) => {
  const {
    pagination: { page, pageSize, total },
  } = meta;

  const lastPage = Math.ceil(total / pageSize);

  return (
    <>
      {page > 1 && (
        <Link href={`/fests?page=${page - 1}`} className="btn-secondary">
          Prev
        </Link>
      )}
      {page < lastPage && (
        <Link href={`/fests?page=${page + 1}`} className="btn-secondary">
          Next
        </Link>
      )}
    </>
  );
};

export default Pagination;
