import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navtop from "../src/components/Navbar/Navbar";
import About from "../src/pages/About/About";
import Resume from "../src/pages/Resume/Resume";
import Reel from "../src/pages/Reel/Reel";
import Photos from "../src/pages/Photos/Photos";
import Gallery from "../src/components/Gallery/Gallery";
import Performance from "../src/components/Performance/Performance";
import Contact from "../src/pages/Contact/Contact";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <>
    <Router>
    <Navtop/>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/resume" component={Resume}/>
    <Route exact path="/reel" component={Reel}/>
    <Route exact path="/photos" component={Photos}/>
    <Route exact path="/gallery" component={Gallery}/>
    <Route exact path="/performance" component={Performance}/>
    <Route exact path="/contact" component={Contact}/>
 </Router>
    </>

  );
}

export default App;