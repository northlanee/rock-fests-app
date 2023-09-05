import { ChangeEvent, FC, FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import { FaImage } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Form.module.scss";
import { API_URL } from "@/config";
import dayjs from "dayjs";
import { Fest } from "@/types";
import Modal from "./Modal";
import ImageUpload from "./ImageUpload";

interface ValuesState {
  name: string;
  performers: string;
  venue: string;
  address: string;
  date: string;
  time: string;
  description: string;
}

const EditFestMain: FC<{ fest: Fest }> = ({ fest }) => {
  const { name, performers, venue, address, date, time, description } =
    fest.attributes;

  const [values, setValues] = useState<ValuesState>({
    name,
    performers,
    venue,
    address,
    date,
    time,
    description,
  });

  const [imagePreview, setImagePreview] = useState(
    fest.attributes?.image?.data
      ? fest.attributes.image.data.attributes.formats.thumbnail.url
      : null
  );

  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const hasEmptyFields = Object.values(values).some((el) => el === "");

    if (hasEmptyFields) toast.error("Please fill in all fields");

    const res = await fetch(`${API_URL}/api/fests/${fest.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: values }),
    });

    if (!res.ok) {
      toast.error("Something went wrong");
    } else {
      const fest = await res.json();
      router.push(`/fests/${fest.data.attributes.slug}`);
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const imageUploaded = async () => {
    const res = await fetch(`${API_URL}/api/fests/${fest.id}?populate=deep`);
    const data = (await res.json()).data as Fest;

    setImagePreview(
      data.attributes.image.data.attributes.formats.thumbnail.url
    );

    setShowModal(false);
  };

  return (
    <div>
      <Link href="/fests">{"<"} Go Back</Link>
      <h1>Edit fest</h1>

      <ToastContainer />

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div>
            <label htmlFor="name">Fest name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="performers">Performers</label>
            <input
              type="text"
              id="performers"
              name="performers"
              value={values.performers}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="venue">Venue</label>
            <input
              type="text"
              id="venue"
              name="venue"
              value={values.venue}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={values.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={dayjs(values.date).format("YYYY-MM-DD")}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="time">Time</label>
            <input
              type="text"
              id="time"
              name="time"
              value={values.time}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={values.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <input type="submit" value="Update Event" className="btn" />
      </form>
      <h2>Event image</h2>
      {imagePreview ? (
        <Image src={imagePreview} alt={name} height={100} width={170} />
      ) : (
        <div>
          <p>No image uploaded</p>
        </div>
      )}

      <div>
        <button className="btn-secondary" onClick={() => setShowModal(true)}>
          <FaImage /> Set image
        </button>
      </div>

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Image upload"
      >
        <ImageUpload festId={fest.id} imageUploaded={imageUploaded} />
      </Modal>
    </div>
  );
};

export default EditFestMain;
