import {useEffect, useState} from "react";
import {getAnimalDetail} from "../api/AnimalAPI";
import {useParams} from "react-router-dom";

function AnimalDetail() {
    const {ABDM_IDNTFY_NO} = useParams();
    const [animal, setAnimal] = useState();

    useEffect(() => {
        getAnimalDetail(ABDM_IDNTFY_NO).then(data => setAnimal(data));
    }, []);

    return (
      <div className="content-col">
          { animal &&
            <>
                <p>{animal.row.SHTER_NM}</p>
                <h1>{animal.row.PBLANC_BEGIN_DE}</h1>
                <h1>{animal.row.SPECIES_NM}</h1>
            </>
          }
      </div>
    );

}

export default AnimalDetail;