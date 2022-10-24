import React from "react";
import { useState } from "react";

import styles from "./ContinentFilter.module.css";

const ContinentFilter = ({ setCurrentPage, setFilterState, filterSate}) => {
    const continentsList = [
        "Africa",
        "Americas",
        "Asia",
        "Europe",
        "Oceania",
        "Antartic",
    ];

    const [filterContinent, setFilterContinent] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
    ]);

    const handleFilterContinent = (event) => {
        let updateCheckedState = [
            ...filterContinent.map((element, index) => 
                index === parseInt(event.target.id) ? !element : element
            ),
        ];
        setFilterContinent(updateCheckedState);

        let statusFilter = continentsList.filter(
            (element, index) => updateCheckedState[index] === true
        );
        setFilterState({ ...filterSate, continent: statusFilter });
        setCurrentPage(1);
    };

    return (
        <div className={styles.filterContinent}>
            <h4>Filtrado por continente</h4>
            {continentsList.map((element, index) => {
                return (
                    <div key={"div" + index}>
                        <label key={"label" + index}>
                            <input  
                                key={"input" + index}
                                type="checkbox"
                                id={index}
                                name={element}
                                value={element}
                                checked={filterContinent[index]}
                                onChange={(e) => handleFilterContinent(e)}
                            />
                            {element}
                        </label>
                    </div>
                );
            })}
        </div>
    );
};

export default ContinentFilter;