import React from "react";
import styles from "./styles.module.css";
import Tooltip from '@mui/material/Tooltip';

export const Cards = ({ title, icon }) => {
    return (
        <div className={styles.container}>
            <Tooltip title={<h2>{title}</h2>} placement="top">
                <h1>{title}</h1>
            </Tooltip>
            <img src={icon} alt={title} />
        </div>
    )
}