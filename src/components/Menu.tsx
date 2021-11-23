import { Link  } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item- m-1">
              <Link className="btn btn-light btn-outline-primary" to="/">Home</Link >
            </li>
            <li className="nav-item- m-1">
              <Link className="btn btn-light btn-outline-primary" to="/profile">Profile</Link >
            </li>
          </ul>
        </nav>
    )
}

export default Menu;