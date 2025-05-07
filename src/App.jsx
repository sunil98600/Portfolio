
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Myinfo from "./myinfo";

const App=()=> {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home info={Myinfo} />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

