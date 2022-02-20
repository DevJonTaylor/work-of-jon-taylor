import { Bar } from "./Bar";
import { Link } from "./Link";

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
        <div className="container-fluid">
          <span className="navbar-brand">Jon Taylor</span>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <Link href="/projects">Projects</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/about">About Me</Link>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export { Navbar }