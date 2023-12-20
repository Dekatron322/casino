import React from "react";
import { Button } from "../components/Button";
import { Section } from "../components/Section";
import { Icon } from "../components/Icon";
import styles from "./Home.module.css";

export function Home() {
  return (
    <div className={styles.banner}>
      <Section>
        <h2>Play Like a Retard</h2>
        <p style={{ wordWrap: "break-word" }}>
          You can only win if you're retarded, So why not be a fucking retard?
        </p>
      </Section>
    </div>
  );
}
