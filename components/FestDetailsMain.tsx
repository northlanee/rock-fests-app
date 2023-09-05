import { Fest } from "@/types";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./FestDetailsMain.module.scss";
import { API_URL } from "@/config";
import { useRouter } from "next/router";

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

  const router = useRouter();

  const deleteFest = async (fest: Fest) => {
    if (confirm("Are you sure?")) {
      const res = await fetch(`${API_URL}/api/fests/${fest.id}`, {
        method: "DELETE",
      });

      const festRes = await res.json();

      if (!festRes?.data) {
        toast.error("Something went wrong");
      } else {
        router.push("/fests");
      }
    }
  };

  return (
    <div className={styles.fest}>
      <div className={styles.controls}>
        <Link href={`/fests/edit/${fest.id}`}>
          <FaPencilAlt /> Edit Fest
        </Link>
        <a href="#" onClick={() => deleteFest(fest)} className={styles.delete}>
          <FaTimes /> Delete Fest
        </a>
      </div>

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

      <Link href="/fests" className={styles.back}>
        {"<"} Go Back
      </Link>
    </div>
  );
};

export default FestDetailsMain;
