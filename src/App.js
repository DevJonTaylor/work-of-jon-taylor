import {Routes, Route} from "react-router";
import { Projects, Contact, About } from "./routes";
import { Navbar } from "./Navbar";

function Theme() {
  return (
    <div className="container">
      <h1 className="text-center mt-5">Jon Taylor's Portfolio</h1>
      <Routes className="box">
        <Route path="/" element={<Projects />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Theme />
    </div>
  );
}

export default App;
