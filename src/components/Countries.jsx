import { useEffect, useState } from "react";
import SearchImg from "../images/icon-search.svg";
import SingleCountry from "./SingleCountry";

function Countries({ isDark }) {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [region, setRegion] = useState("All");
  const [filtered, setFiltered] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://restcountries.com/v2/all");
    const data = await response.json();
    setCountries(data);
    console.log(countries);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterCountries = (region) => {
    const newCountries = countries.filter(
      (country) => country.region === region
    );
    setFiltered(newCountries);
  };

  return (
    <>
      <section className="searchBar">
        <div className="search">
          <img src={SearchImg} alt="IMG" />
          <input
            className={isDark ? "darkText dark" : ""}
            type="text"
            placeholder="Search for a country..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <div className="regions">
          <button
            className={isDark ? "dark darkText" : ""}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span>{region}</span>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="ml-auto text-primary-text"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </button>
          <ul className={open ? "" : "hide"}>
            <li
              onClick={() => {
                filterCountries("Africa");
                setOpen(false);
                setRegion("Africa");
              }}
            >
              Africa
            </li>
            <li
              onClick={() => {
                filterCountries("Americas");
                setOpen(false);
                setRegion("Americas");
              }}
            >
              Americas
            </li>
            <li
              onClick={() => {
                filterCountries("Asia");
                setOpen(false);
                setRegion("Asia");
              }}
            >
              Asia
            </li>
            <li
              onClick={() => {
                filterCountries("Europe");
                setOpen(false);
                setRegion("Europe");
              }}
            >
              Europe
            </li>
            <li
              onClick={() => {
                filterCountries("Oceania");
                setOpen(false);
                setRegion("Oceania");
              }}
            >
              Oceania
            </li>
            <li
              onClick={() => {
                filterCountries("Polar");
                setOpen(false);
                setRegion("Polar");
              }}
            >
              Polar
            </li>
            <li
              onClick={() => {
                setFiltered(countries);
                setOpen(false);
                setRegion("All");
              }}
            >
              All
            </li>
          </ul>
        </div>
      </section>
      {region === "All" ? (
        <section className="countries">
          {countries.map((country) => {
            return <SingleCountry country={country} key={country.alpha3Code} />;
          })}
        </section>
      ) : (
        <section className="countries">
          {filtered.map((country) => {
            return <SingleCountry country={country} key={country.alpha3Code} />;
          })}
        </section>
      )}
    </>
  );
}

export default Countries;
