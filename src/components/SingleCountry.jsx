import { useEffect, useState } from "react";

function SingleCountry({ country, isDark }) {
  const { name, population, region, capital } = country;

  return (
    <div className={isDark ? "country dark darkText" : "country"}>
      <img src={country.flags.png} alt="IMG" />
      <h2>{name}</h2>
      <h4>
        Population: <span>{population}</span>{" "}
      </h4>
      <h4>
        Region: <span> {region}</span>
      </h4>
      <h4>
        Capital: <span>{capital}</span>
      </h4>
    </div>
  );
}

export default SingleCountry;
