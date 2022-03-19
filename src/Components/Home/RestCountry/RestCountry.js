import React from 'react';
import './RestCountry.css';

const RestCountry = (props) => {
  const rest = props.restCountry;
  console.log(rest);
  const name = rest.name.common;
  // console.log(name);
  const capital = rest.capital;
  const flag = rest.flags.svg;
  return (
    <div className='single-country'>
      <h2>{name}</h2>
      <h5>{capital}</h5>
      <img src={flag} alt="" />
    </div>
  );
};

export default RestCountry;