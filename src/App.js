import { Switch, Route, HashRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetails from "./components/CountryDetails";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/details/:alpha3Code" children={<CountryDetails />} />
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
