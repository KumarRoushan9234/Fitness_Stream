// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { FcGoogle } from "react-icons/fc";
// import styles from "./Signup.module.css";
// import cuteDragonGif from "../../resource/images/cute-dragon-running.gif";
// import { toast } from "react-toastify";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//   });
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await axios.post(
//         "http://127.0.0.1:8000/auth/signup",
//         formData
//       );
//       toast.success("Signup successful!");
//       navigate("/login");
//     } catch (err) {
//       const errorMessage = err.response
//         ? err.response.data.detail
//         : "Something went wrong";
//       setError(errorMessage);
//       toast.error(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleSignup = () => {
//     toast.info("Google signup coming soon!");
//   };

//   return (
//     <div className={styles.signupContainer}>
//       <div className={styles.loginContainer}>
//         <div className={styles.header}>
//           <div className={styles.headerTop}>
//             <img
//               src={cuteDragonGif}
//               alt="Dragon Running"
//               className={styles.gifImage}
//             />
//             <h1 className={styles.headerText}>Fit Quest</h1>
//           </div>
//         </div>
//         <div className={styles.formWrapper}>
//           <button
//             type="button"
//             className={styles.googleBtn}
//             onClick={handleGoogleSignup}
//           >
//             <FcGoogle size={24} />
//             Continue with Google
//           </button>

//           {/* Centered Divider */}
//           <div className={styles.divider}>
//             {/* <span className={styles.orText}>OR</span> */}
//           </div>

//           {/* Centered Create Account Text */}
//           <h2 className={styles.createAccountText}>Create New Account</h2>

//           <form onSubmit={handleSubmit} className={styles.form}>
//             <div className={styles.inputBox}>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//               <button
//                 type="submit"
//                 className={styles.signupBtn}
//                 disabled={loading}
//               >
//                 {loading ? "Loading..." : "Sign In"}
//               </button>
//             </div>
//             {error && <div className={styles.error}>{error}</div>}
//             <button
//               type="button"
//               className={styles.toggleBtn}
//               onClick={() => navigate("/login")}
//             >
//               Already have an account? Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import styles from "./Signup.module.css";
import cuteDragonGif from "../../resource/images/cute-dragon-running.gif";
import { toast } from "react-toastify";
import ImageSlider from "../ImageSlider/ImageSlider"; // Import the ImageSlider component

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
        "http://127.0.0.1:8000/auth/signup",
        formData
      );
      toast.success("Signup successful!");
      navigate("/login");
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

  const handleGoogleSignup = () => {
    toast.info("Google signup coming soon!");
  };

  return (
    <div className={styles.signupContainer}>
      {/* Left side - Signup form */}
      <div className={styles.formContainer}>
        <div className={styles.header}>
          <div className={styles.headerTop}>
            <img
              src={cuteDragonGif}
              alt="Dragon Running"
              className={styles.gifImage}
            />
            <h1 className={styles.headerText}>Fit Quest</h1>
          </div>
        </div>
        <div className={styles.formWrapper}>
          <button
            type="button"
            className={styles.googleBtn}
            onClick={handleGoogleSignup}
          >
            <FcGoogle size={24} />
            Continue with Google
          </button>

          {/* Centered Divider */}
          <div className={styles.divider}>
            {/* <span className={styles.orText}>OR</span> */}
          </div>

          {/* Centered Create Account Text */}
          <h2 className={styles.createAccountText}>Create New Account</h2>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputBox}>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className={styles.signupBtn}
                disabled={loading}
              >
                {loading ? "Loading..." : "Sign In"}
              </button>
            </div>
            {error && <div className={styles.error}>{error}</div>}
            <button
              type="button"
              className={styles.toggleBtn}
              onClick={() => navigate("/login")}
            >
              Already have an account? Login
            </button>
          </form>
        </div>
      </div>

      {/* Right side - ImageSlider */}
      <div className={styles.sliderContainer}>
        <ImageSlider />
      </div>
    </div>
  );
};

export default Signup;
