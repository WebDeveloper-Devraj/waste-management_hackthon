import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import styles from "./Header.module.css";
import LoginPage from "../Login_SignUp/LoginPage";
import SignUpPage from "../Login_SignUp/SignUpPage";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { scrollActions } from "../../store/scroll";
import { loginSignUpActions } from "../../store/loginSignUp";

const Header = () => {
  const dispatch = useDispatch();

  // to change background color of header when scrolled
  useEffect(() => {
    // adding handleScroll function to window at first time (useEffect)
    const handleScroll = () => {
      dispatch(scrollActions.setScrolled(window.scrollY > 50));
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);

  // fetching scroll status from store
  const scrolled = useSelector((store) => store.scroll);

  // fetching login and signUp page status from store
  const { showLoginPage, showSignUpPage } = useSelector(
    (store) => store.loginSignUpUi
  );

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Lora:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : null}`}
      >
        <div className={styles.header_container}>
          {/* Logo */}
          <div className={styles.logo}>
            <img src={logo} alt="Restaurant Logo" />
          </div>

          {/* Navigation Menu */}
          <nav className={styles.navigation}>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : null
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : null
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/community-reports"
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : null
                  }
                >
                  Community Reports
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/leaderboard"
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : null
                  }
                >
                  Leaderboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/education"
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : null
                  }
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : null
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Action Buttons */}
          <div className={styles.action_buttons}>
            <button
              className={`btn ${styles.login}`}
              onClick={() => dispatch(loginSignUpActions.toggleLoginPage())}
            >
              Login
            </button>
            <button
              className={`btn  ${styles.signup}`}
              onClick={() => dispatch(loginSignUpActions.toggleSignUpPage())}
            >
              Sign Up
            </button>
          </div>
        </div>

        {showLoginPage && (
          <div className={styles.login_page}>
            <LoginPage />
          </div>
        )}

        {showSignUpPage && (
          <div className={styles.signUp_page}>
            <SignUpPage />
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
