import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export const Header: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <NavLink className={styles.logo} to="/">
            <img alt="Gamba logo" src="https://poemonk.com/images/0poem.png" />
            <span>PeomCasino</span>
          </NavLink>
        </div>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <div className={styles.externalLinks}>
            <a href="https://poemonk.com" target="_blank" rel="noreferrer">
              Poem Website
            </a>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
