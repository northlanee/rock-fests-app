import { FC } from "react";
import { Fest } from "@/types";
import Link from "next/link";
import Image from "next/image";
import styles from "./FestItem.module.scss";

const FestItem: FC<{ fest: Fest }> = ({ fest }) => {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={fest.image || "/images/event-default.png"}
          alt={fest.name}
          width={170}
          height={100}
        />
      </div>

      <div className={styles.info}>
        <span>
          {fest.date} at {fest.time}
        </span>
        <h3>{fest.name}</h3>
      </div>

      <div className={styles.link}>
        <Link href={`/fests/${fest.slug}`} className="btn">
          Details
        </Link>
      </div>
    </div>
  );
};

export default FestItem;
