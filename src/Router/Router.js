import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Carousel } from "../Carousel/Carousel";
import { AboutMe } from "../About/About";
import { Utility } from "../Repos/Repos";

export const Routing = () => {
  return (
    <Router>
      <div>
        <ul id="routes">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/repos">Repos</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/repos">
            <Repos />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const Home = () => {
  return <Carousel />;
};

function Repos() {
return <Utility/>
}

const About = () => {
  return <AboutMe />;
};
