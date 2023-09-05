import { FaUser } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { FaImage } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import styles from "./AuthForm.module.scss";
import { FormEvent, useContext, useEffect, useState } from "react";
import AuthContext from "@/context/AuthContext";

const LoginMain = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = useContext(AuthContext);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className={styles.auth}>
      <h1>
        <FaUser /> Log In
      </h1>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="Log In" className="btn" />
      </form>
      <p>
        Don&apos;t have an account?{" "}
        <Link href="/account/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginMain;
