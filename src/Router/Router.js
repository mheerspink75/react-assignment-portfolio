import "./Router.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Carousel } from "../Carousel/Carousel";
import { AboutMe } from "../About/About";
import { Utility } from "../Repos/Repos";

export const Routing = () => {
  return (
    <Router>
      <div>
        <ul id="routes" className="btn-group" role="group" aria-label="Basic outlined example">
          <li>
            <Link to="/" type="button" className="btn btn-outline-primary btn-sm">Home</Link>
          </li>
          <li>
            <Link to="/repos" type="button" className="btn btn-outline-primary btn-sm">Repos</Link>
          </li>
          <li>
            <Link to="/about" type="button" className="btn btn-outline-primary btn-sm">About</Link>
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

const Home = () => <Carousel />;

const Repos = () => <Utility />;

const About = () => <AboutMe />;
