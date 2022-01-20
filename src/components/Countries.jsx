import { useEffect, useState } from "react";
import SearchImg from "../images/icon-search.svg";
import SingleCountry from "./SingleCountry";

function Countries({ isDark }) {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const fetchData = async () => {
    const response = await fetch("https://restcountries.com/v2/all");
    const data = await response.json();
    setCountries(data);
    console.log(countries);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
            <span>All</span>
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
            <li>Africa</li>
            <li>Americas</li>
            <li>Asia</li>
            <li>Europe</li>
            <li>Oceania</li>
            <li>Polar</li>
            <li>All</li>
          </ul>
        </div>
      </section>
      <section className="countries">
        {countries.map((country) => {
          return <SingleCountry country={country} key={country.alpha3Code} />;
        })}
      </section>
    </>
  );
}

export default Countries;
