import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    // console.log(country)
    const { name, flags, capital, borders, continents, cca3 } = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!visited);
        // console.log('Visited this Country');
    }

    // const passWithParams = () =>{
    //     handleVisitedCountry(country);
    // }

    return (
        <div>
            <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
                <div>
                    <h4 style={{color: visited ? 'Purple' : 'yellow'}}>Name: {name?.common}</h4>
                    <img className='img-manage' src={flags.png} alt="" />
                    <button onClick={handleVisited} >{visited ? 'Visited' : 'Going'}</button>
                    {visited ? "I've visited this country" : "I'nt to visit"}
                    <button onClick={() => handleVisitedCountry(country)} >Mark Bucketlist</button>
                    <button onClick={() => handleVisitedFlags(country.flags.png)} >Add Visited Country Flag</button>
                    <hr />
                    <CountryDetail
                        country={country}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlags={handleVisitedFlags}
                    ></CountryDetail>
                </div>
                <div>
                    {/* <h3>Name: {country.name.nativeName}</h3> */}
                    <p>Capital: {capital}</p>
                    <p>Continent: {continents}</p>
                    <p> Borders: {borders?.length > 0 ? borders.join(', ') : 'Info not available'}</p>
                    <p><small>Code: {cca3}</small></p>
                    
                </div>

            </div>
        </div>
    );
};

export default Country;