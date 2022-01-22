import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetails from "./components/CountryDetails";
import Error from "./pages/Error";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/details/:alpha3Code" children={<CountryDetails />} />
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  );
}

export default App;
