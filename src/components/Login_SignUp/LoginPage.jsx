import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";

import styles from "./LoginPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginSignUpActions } from "../../store/loginSignUp";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { open } = useSelector((store) => store.loginSignUpUi);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      dispatch(loginSignUpActions.setOpen(true));
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [dispatch]);

  const handleClose = () => {
    dispatch(loginSignUpActions.setOpen(false));

    setTimeout(() => {
      dispatch(loginSignUpActions.toggleLoginPage());
    }, 320);
  };

  return (
    <div className={`${styles.login_page} ${open && styles.open}`}>
      <div className={styles.login_content}>
        <div className={styles.close_icon} onClick={handleClose}>
          <IoClose />
        </div>
        <div>
          <h2>Welcome Back!</h2>
          <p>Login to access your account</p>
          <form>
            <label htmlFor="email">What's your e-mail?</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            <label htmlFor="password">Your password?</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
            <button type="submit" className={styles.login}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
