import React from "react";
import {useSelector} from "react-redux";

import styles from "./ActivityFilter.module.css";

const ActivityFilter = ({ setCurrentPage, setFilterState, filterState }) => {
    const allActivities = useSelector((state) => state.activitiesNamesId);

    const handleFilterActivity = (event) => {
        setFilterState({...filterState, activity:event.target.value})
        setCurrentPage(1);
        event.preventDefault();
    };

    return (
        <div className={styles.activityFilterList}>
            <h4>Filtrado por actividades</h4>
            <div className={styles.selectActivity}>
                <select onChange={(e) => handleFilterActivity(e)}>
                    <option key={"activityFilter All"} value="All">
                        Todos los paises
                    </option>
                    {allActivities &&
                    allActivities.map((elem) => {
                        return (
                            <option key={"activityFilter" + elem.name} value={elem.id}>
                                {elem.name}
                            </option>
                        );
                    })}
                </select>
            </div>
        </div>
    );
};

export default ActivityFilter;