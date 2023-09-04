import { FC } from "react";
import { Fest } from "@/types";
import Link from "next/link";
import Image from "next/image";
import styles from "./FestItem.module.scss";

const FestItem: FC<{ fest: Fest }> = ({ fest }) => {
  const {
    attributes: { name, image, date, time, slug },
  } = fest;

  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={image.data.attributes.url || "/images/event-default.png"}
          alt={name}
          width={170}
          height={100}
        />
      </div>

      <div className={styles.info}>
        <span>
          {new Date(date).toLocaleDateString("en-UK")} at {time}
        </span>
        <h3>{name}</h3>
      </div>

      <div className={styles.link}>
        <Link href={`/fests/${slug}`} className="btn">
          Details
        </Link>
      </div>
    </div>
  );
};

export default FestItem;
