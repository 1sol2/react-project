import {Link} from "react-router-dom";

import React from 'react';

function AnimalItem({ animal }) {
    return (
        <Link to={`/animal/${animal.ABDM_IDNTFY_NO}`}>
        <div className="item">
            <p>품종: {animal.SPECIES_NM}</p>
            <p>나이: {animal.AGE_INFO}</p>
            <p>보호소명: {animal.SHTER_NM}</p>
        </div>
        </Link>
    );
}

export default AnimalItem;


