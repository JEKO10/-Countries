import React from "react";

function SingleCountry({ country }) {
  const { name, population, region, capital } = country;

  return (
    <div className="country">
      <img src={country.flags.png} alt="IMG" />
      <h1>{name}</h1>
      <h3>
        Population: <span>{population}</span>{" "}
      </h3>
      <h3>
        Region: <span> {region}</span>
      </h3>
      <h3>
        Capital: <span>{capital}</span>
      </h3>
    </div>
  );
}

export default SingleCountry;
