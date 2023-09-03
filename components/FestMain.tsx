import { Fest } from "@/types";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import styles from "./FestMain.module.scss";

const FestMain: FC<{ fest: Fest }> = ({ fest }) => {
  const deleteFest = () => {
    console.log("delete");
  };

  return (
    <div className={styles.fest}>
      <div className={styles.controls}>
        <Link href={`/fests/edit/${fest.id}`}>
          <FaPencilAlt /> Edit Fest
        </Link>
        <a href="#" onClick={deleteFest} className={styles.delete}>
          <FaTimes /> Delete Fest
        </a>
      </div>

      <span>
        {fest.date} at {fest.time}
      </span>
      <h1>{fest.name}</h1>
      {fest.image && (
        <div className={styles.image}>
          <Image src={fest.image} alt={fest.name} width={960} height={600} />
        </div>
      )}

      <h3>Performers:</h3>
      <p>{fest.performers}</p>
      <h3>Description:</h3>
      <p>{fest.description}</p>
      <h3>Venue: {fest.venue}</h3>
      <p>{fest.address}</p>

      <Link href="/fests" className={styles.back}>
        {"<"} Go Back
      </Link>
    </div>
  );
};

export default FestMain;
