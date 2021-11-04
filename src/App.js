import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import { Routing } from "./Router/Router";
import { Profile } from "./Profile/Profile";

export default function App() {
  return (
    <div className="App">
      <Profile />
      <Routing />
    </div>
  );
}
