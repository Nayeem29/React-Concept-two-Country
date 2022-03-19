import React, { useEffect, useState } from 'react';
import RestCountry from './RestCountry/RestCountry';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Country></Country>
    </div>
  );
};

const Country = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const url = 'https://restcountries.com/v3.1/all';
    fetch(url)
      .then(res => res.json())
      .then(data => setCountries(data));
  }, []);

  return (
    <div className='country-info'>
      {
        countries.map(country => {
          // console.log(country);
          return (
            <RestCountry restCountry={country}>
            </RestCountry>
          );
        }
        )
      }
    </div>
  );
}

export default Home;