import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

function Error() {
  const { isDark } = useGlobalContext();

  return (
    <section className={isDark ? "error darkSection" : "error"}>
      <h1>No country to display!</h1>
      <Link to="/" id="back">
        Back Home
      </Link>
    </section>
  );
}

export default Error;
