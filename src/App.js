import Body from "./component/Body.js";
import Footer from "./component/Footer.js";
import Header from "./component/Header.js";
import Signup from "./component/Signup.js";
import Home from "./component/Home.js";
import Login from "./component/Login.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
