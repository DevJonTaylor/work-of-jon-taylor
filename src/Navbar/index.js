import { Bar } from "./Bar";
import { Link } from "./Link";
import {NavLink} from "react-router-dom";

function Navbar() {
  return (
    <header>
      <Bar>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="./">Jon Taylor</NavLink>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <Link href="./projects">Projects</Link>
              <Link href="./contact">Contact</Link>
              <Link href="./about">About Me</Link>
            </ul>
          </div>
        </div>
      </Bar>
    </header>
  )
}

export { Navbar }