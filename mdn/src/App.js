import Nav from "./components/Nav";

import "./assets/css/styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import AnimationRoutes from "./components/AnimationRoutes";

function App() {
  return (
    <header className="App">
      <Router>
        <Nav />
        <AnimationRoutes />
      </Router>
    </header>
  );
}

export default App;
