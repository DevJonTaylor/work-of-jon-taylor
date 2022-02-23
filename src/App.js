import { Routes, Route } from "react-router";
import { Projects, Contact, About } from "./routes";
import { Navbar } from "./Navbar";

function Theme() {
  return (
    <main className="container">
      <h1 className="text-center m-3">Jon Taylor's Portfolio</h1>
      <Routes className="box">
        <Route path="./" element={<Projects />} />
        <Route path="./projects" element={<Projects />} />
        <Route path="./contact" element={<Contact />} />
        <Route path="./about" element={<About />} />
      </Routes>
    </main>
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
