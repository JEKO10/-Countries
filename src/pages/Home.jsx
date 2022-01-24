import { useGlobalContext } from "../context";
import Countries from "../components/Countries";

function Home() {
  const { isDark } = useGlobalContext();

  const divs = document.getElementsByTagName("div");
  const text = [
    document.getElementsByTagName("h2"),
    document.getElementsByTagName("h3"),
    document.getElementsByTagName("h4"),
  ];

  if (isDark) {
    document.body.style.backgroundColor = "#2b3945";

    text.forEach((singleText) => {
      for (let i = 0; i < singleText.length; i++) {
        singleText[i].classList.add("darkText");
      }
    });

    for (let i = 0; i < divs.length; i++) {
      divs[i].classList.add("dark");
    }
  } else {
    document.body.style.backgroundColor = "#fafafa";

    text.forEach((singleText) => {
      for (let i = 0; i < singleText.length; i++) {
        singleText[i].classList.remove("darkText");
      }
    });

    for (let i = 0; i < divs.length; i++) {
      divs[i].classList.remove("dark");
    }
  }

  return (
    <>
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
