import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Login.module.css";
import cuteDragonGif from "../../resource/images/cute-dragon-running.gif";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/auth/login",
        formData
      );
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      const errorMessage = err.response
        ? err.response.data.detail
        : "Something went wrong";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.header}>
        <img
          src={cuteDragonGif}
          alt="Dragon Running"
          className={styles.gifImage}
        />
        <h1 className={styles.appName}>Runner Stream</h1>
      </div>
      <h2 className={styles.formTitle}>Login</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {error && <div className={styles.error}>{error}</div>}
        <button type="submit" className={styles.loginBtn} disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </button>
        <button
          type="button"
          className={styles.toggleBtn}
          onClick={() => navigate("/signup")}
        >
          Don't have an account? Signup
        </button>
      </form>
    </div>
  );
};

export default Login;
