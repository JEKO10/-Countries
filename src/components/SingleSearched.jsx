import React from "react";

function SingleSearched({ country, isDark }) {
  return (
    <div>
      <h1>{country.name.common}</h1>
    </div>
  );
}

export default SingleSearched;
