import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="error">
      <h1>No country to display!</h1>
      <Link to="/" id="back">
        Back Home
      </Link>
    </section>
  );
}

export default Error;
