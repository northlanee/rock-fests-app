import ReactDOM from "react-dom";
import { FaTimes } from "react-icons/fa";
import styles from "./Modal.module.scss";
import { FC, ReactNode, useEffect, useState } from "react";

interface IModal {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

const Modal: FC<IModal> = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>
  ) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          {title && <div className={styles.title}>{title}</div>}
          <a href="#" onClick={handleClose}>
            <FaTimes />
          </a>
        </div>

        <div className={styles.body}>{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root") as HTMLElement
    );
  } else {
    return null;
  }
};

export default Modal;
