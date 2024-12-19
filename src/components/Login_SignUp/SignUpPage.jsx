import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import styles from "./SignUpPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginSignUpActions } from "../../store/loginSignUp";

const SignUpPage = () => {
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
      dispatch(loginSignUpActions.toggleSignUpPage());
    }, 320);
  };

  return (
    <div className={`${styles.login_page} ${open && styles.open}`}>
      <div className={styles.login_content}>
        <div className={styles.close_icon} onClick={handleClose}>
          <IoClose />
        </div>
        <div>
          <h5>Sign Up to Krishna Restaurant!</h5>
          <p>Start your journy</p>
          <form>
            <label htmlFor="name">What's your name?</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
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
            <label htmlFor="phoneNo">Phone Number</label>
            <input
              type="text"
              id="phoneNo"
              name="phoneNo"
              placeholder="98xxxxxxxx"
              required
            />
            <button type="submit" className={styles.login}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
