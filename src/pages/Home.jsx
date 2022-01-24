import { useGlobalContext } from "../context";
import Countries from "../components/Countries";
import Navbar from "../components/Navbar";

function Home() {
  const { isDark } = useGlobalContext();

  return (
    <>
      <Navbar />
      <main
        style={
          isDark
            ? { backgroundColor: "#2b3945" }
            : { backgroundColor: "#fafafa" }
        }
      >
        <Countries isDark={isDark} />
      </main>
    </>
  );
}

export default Home;
