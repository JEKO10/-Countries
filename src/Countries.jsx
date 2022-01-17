function Countries() {
  return (
    <>
      <section className="searchBar">
        <div>
          <svg height="24" width="25" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
              fill="#0079ff"
            />
          </svg>
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
