import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Navigation from "./components/Navigation";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Navigation />
        <AnimatedRoutes />
      </Router>
    </>
  );
};

export default App;
