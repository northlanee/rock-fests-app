import { FC } from "react";
import Link from "next/link";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import styles from "./DashboardFest.module.scss";
import { FestAttributes } from "@/types";

const DashboardFest: FC<{
  fest: FestAttributes;
  handleDelete: (id: number) => void;
}> = ({ fest, handleDelete }) => {
  return (
    <div className={styles.fest}>
      <h4>
        <Link href={`/fests/${fest.slug}`}>{fest.name}</Link>
      </h4>
      <Link href={`/fests/edit/${fest.id}`} className={styles.edit}>
        <FaPencilAlt /> <span>Edit Fest</span>
      </Link>
      <a className={styles.delete} onClick={() => handleDelete(fest.id)}>
        <FaTimes /> <span>Delete</span>
      </a>
    </div>
  );
};

export default DashboardFest;
