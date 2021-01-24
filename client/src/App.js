import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navtop from "../src/components/Navbar/Navbar";
import About from "../src/pages/About/About";
import Resume from "../src/pages/Resume/Resume";
import Reel from "../src/pages/Reel/Reel";


function App() {
  
  return (
    <>
    <Router>
    <Navtop/>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/resume" component={Resume}/>
    <Route exact path="/reel" component={Reel}/>
     
  
 </Router>
    </>

  );
}

export default App;
