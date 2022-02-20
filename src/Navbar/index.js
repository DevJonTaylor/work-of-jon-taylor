import { Bar } from "./Bar";
import { Link } from "./Link";

function Navbar() {
  return (
    <header>
      <Bar>
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
      </Bar>
    </header>
  )
}

export { Navbar }