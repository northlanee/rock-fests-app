import { Fest } from "@/types";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./FestDetailsMain.module.scss";
import EventMap from "./EventMap";

const FestDetailsMain: FC<{ fest: Fest }> = ({ fest }) => {
  const {
    attributes: {
      name,
      image,
      date,
      time,
      performers,
      description,
      venue,
      address,
    },
  } = fest;

  return (
    <div className={styles.fest}>
      {/* <div className={styles.controls}>
        <Link href={`/fests/edit/${fest.id}`}>
          <FaPencilAlt /> Edit Fest
        </Link>
        <a href="#" onClick={() => deleteFest(fest)} className={styles.delete}>
          <FaTimes /> Delete Fest
        </a>
      </div> */}

      <span>
        {new Date(date).toLocaleDateString("en-UK")} at {time}
      </span>
      <h1>{name}</h1>
      <ToastContainer />
      {image?.data?.id && (
        <div className={styles.image}>
          <Image
            src={image.data.attributes.url}
            alt={name}
            width={960}
            height={600}
          />
        </div>
      )}

      <h3>Performers:</h3>
      <p>{performers}</p>
      <h3>Description:</h3>
      <p>{description}</p>
      <h3>Venue: {venue}</h3>
      <p>{address}</p>

      <EventMap address={address} />

      <Link href="/fests" className={styles.back}>
        {"<"} Go Back
      </Link>
    </div>
  );
};

export default FestDetailsMain;
