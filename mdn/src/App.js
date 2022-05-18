import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./assets/css/styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import AnimationRoutes from "./components/AnimationRoutes";

function App() {
  return (
    <header className="App">
      <Router>
        <Nav />
        <AnimationRoutes />
        <Footer />
      </Router>
    </header>
  );
}

export default App;
