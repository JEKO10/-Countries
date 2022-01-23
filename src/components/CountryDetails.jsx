import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function CountryDetails() {
  const { alpha3Code } = useParams();
  const [country, setCountry] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${alpha3Code}`
      );
      const data = await response.json();
      setCountry(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [alpha3Code]);

  return (
    <>
      <section>
        {country.map((country) => {
          console.log(country);
          return (
            <div key={country.ccn3} className="details">
              <Link to="/" id="back">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-arrow-left"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <span>Back</span>
              </Link>
              <div className="main">
                <img src={country.flags.svg} alt="IMG" />
                <div className="info">
                  <h1>{country.name.common}</h1>
                  <div>
                    <ul>
                      <li>
                        <span>Native name: </span>
                        {Object.values(country.name.nativeName)[0]?.common}
                      </li>
                      <li>
                        <span>Population:</span> {country.population}
                      </li>
                      <li>
                        <span>Region:</span> {country.region}
                      </li>
                      <li>
                        <span>Sub Region:</span> {country.subregion}
                      </li>
                      <li>
                        <span>Capital:</span> {country.capital}
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <span>Top Level Domain:</span> {country.tld[0]}
                      </li>
                      <li>
                        <span>Currencies: </span>
                        {Object.values(country.currencies)[0]?.name}
                      </li>
                      <li>
                        <span>Languages: </span>
                        {Object.values(country.languages).join(", ")}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default CountryDetails;
