import React, { useState, useEffect } from 'react';
import {getAnimalList} from "../api/AnimalAPI";
import AnimalItem from "../components/AnimalItem";

function AnimalList() {
    const [animalList, setAnimalList] = useState([]);

    useEffect(() => {
       getAnimalList().then(data => setAnimalList(data))
    }, []);

    return (
        <div className="content-row">
            { animalList && animalList.map(animal => <AnimalItem key={animal.ABDM_IDNTFY_NO} animal={animal}/>)}
        </div>
    );

}

export default AnimalList;