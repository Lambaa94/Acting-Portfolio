import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navtop from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Resume from "./pages/Resume/Resume";
import Reel from "./pages/Reel/Reel";
import Photos from "./pages/Photos/Photos";
import Gallery from "./components/Gallery/Gallery";
import Performance from "./components/Performance/Performance";
import Contact from "./pages/Contact/Contact";

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
