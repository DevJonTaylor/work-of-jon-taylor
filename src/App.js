import {Routes, Route, Outlet} from "react-router";
import { Projects, Contact, About } from "./routes";
import { Navbar } from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes className="box">
        <Route path="/" element={<Projects />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
