import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Outlet } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <div className="Navbar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                <Link className="navbar-brand" to="/">Collab</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        <Link  className="nav-link active" aria-current="page" to="/">Hero</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/materi">Materi</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/berita">Berita</Link>
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