import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetails from "./components/CountryDetails";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/details/:country" children={<CountryDetails />} />
    </Switch>
  );
}

export default App;
