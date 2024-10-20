

import { useState } from 'react';
import './Country.css'

const Country = ({country}) => {
    
  const {name, flags, population, area} = country;

const [visited, setVisited] = useState(false);

const handleVisited = () =>{
    setVisited(!visited)
}


    return (
        <div className={`country ${visited && 'visided'}`}>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Popularion: {population}</p>
            <p >area: {area}</p>
            <button onClick={handleVisited}>{visited ? 'Visited':'Going'}</button>
            {visited ?  ' I have visited this country' : 'I want to visit'}
        </div>
    );
};

export default Country;