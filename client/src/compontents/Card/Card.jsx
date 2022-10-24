import React from "react";
import { Link } from "react-router-dom";

import styles from "./Card.module.css";

const CountryCard = ({ imgFlag, name, continent, population, id}) => {
    return (
        <Link to={`/home/${id}`} className={styles.cardBox}>
            <div className={styles.imgFlagBox}>
                <img src={imgFlag} alt="Not Found" className={styles.imgFlag} />
            </div>
            <div className={styles.dataContent}>
                <label>{name}</label>
                <div className={styles.cardInfo}>
                    <label>Continente: {continent}</label>
                    <label>Poblacion:</label>
                    <label>{population} hab.</label>
                </div>
            </div>
        </Link>
    );
};

export default CountryCard;