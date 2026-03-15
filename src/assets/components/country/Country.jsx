import React, { useState } from 'react';
import './Country.css';

const Country = ({country}) => {
    const [visited, setVisited] = useState(false);
    // console.log(country.name.common);

    const handleVisited = () => {
        // system - 1
        // if(visited) {
        //     setVisited(false);
        // } else {
        //     setVisited(true);
        // }

        // system - 2
        // setVisited(visited ? false : true);

        // system - 3
        setVisited(!visited)
    }

    return (
        // <div className={`country border-lg text-center ${visited ? 'country-visited' : 'country-not-visited'} `}>

       <div className={`country ${visited && 'country-visited'} `}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} - {
            country.area.area  > 300000 ? 'Big Country' : 'Small Country'
            }</p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
        </div>
    );
};

export default Country;