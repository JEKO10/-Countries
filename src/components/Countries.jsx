import SearchImg from "../images/icon-search.svg";

function Countries() {
  return (
    <>
      <section className="searchBar">
        <div>
          <img src={SearchImg} alt="IMG" />
          <input type="text" placeholder="Search for a country..." />
        </div>
        <div>
          <button>
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
        </div>
      </section>
    </>
  );
}

export default Countries;
