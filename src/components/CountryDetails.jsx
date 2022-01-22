import { useParams, Link } from "react-router-dom";

function CountryDetails() {
  const { alpha3Code } = useParams();

  console.log(alpha3Code);

  return <div>a</div>;
}

export default CountryDetails;
