import React from "react";
import CountryCard from "../Card/Card";

import styles from "./Cards.module.css";

const CountriesCards = ({ currentCountries }) => {
    return (
        <div className={styles.cardsBox}>
            {!Array.isArray(currentCountries)
                ? currentCountries
                : currentCountries.map((country) => {
                    return (
                        <CountryCard
                            imgFlag={country.imgFlag}
                            name={country.name}
                            continent={country.continent}
                            population={country.population}
                            id={country.id}
                            key={"Card" + country.id}
                        />
                    );
                })};
        </div>
    );
};

export default CountriesCards;