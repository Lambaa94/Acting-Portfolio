import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navtop from "../src/components/Navbar/Navbar";
import About from "../src/pages/About/About"

function App() {
  
  return (
    <>
    <Router>
    <Navtop/>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    
  
 </Router>
    </>

  );
}

export default App;
