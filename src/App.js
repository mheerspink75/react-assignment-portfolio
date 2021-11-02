import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Routing } from "../src/Router/Router.js";
import { Profile } from "./Profile/Profile";

export default function App() {
  return (
    <div className="App">
      <Profile />
      <Routing />
    </div>
  );
}
