import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Outlet } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#Home">Belajar ReactJS</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <Link id="Home" className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link id="Services" className="nav-link" to="Services">Services</Link>
                    </li>
                    <li className="nav-item">
                    <Link id="Client" className="nav-link" to="Client">Client</Link>
                    </li>
                    <li className="nav-item">
                    <Link id="Content" className="nav-link" to="Content">Content</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
        <Outlet />
        </div>
    )
}

export default Navigation