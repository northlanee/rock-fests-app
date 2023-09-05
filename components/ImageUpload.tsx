import { ChangeEvent, FC, FormEvent, useState } from "react";
import styles from "./Form.module.scss";
import { API_URL } from "@/config";

interface IImageUpload {
  imageUploaded: () => void;
  festId: number;
}

const ImageUpload: FC<IImageUpload> = ({ festId, imageUploaded }) => {
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (image) {
      const formData = new FormData();
      formData.append("files", image);
      formData.append("ref", "api::fest.fest");
      formData.append("refId", festId.toString());
      formData.append("field", "image");

      const res = await fetch(`${API_URL}/api/upload`, {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        imageUploaded();
      }
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setImage(e.target.files[0]);
  };

  return (
    <div className={styles.form}>
      <h1>Upload fest image</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.file}>
          <input type="file" onChange={handleFileChange} />
        </div>
        <input type="submit" value="Upload" className="btn" />
      </form>
    </div>
  );
};

export default ImageUpload;
