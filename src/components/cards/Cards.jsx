import React from "react";
import styles from "./styles.module.css";

export const Cards = ({ title, icon }) => {
    return (
        <div className={styles.container}>
            <h1>{title}</h1>
            <img src={icon} alt={title} />
        </div>
    )
}