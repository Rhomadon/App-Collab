import { Routes, Route, Link, Outlet } from "react-router-dom"
import Navigation from "../Navigation"
import Home from "./Home"
import Laptop from "./Services/Laptop"
import Smartphone from "./Services/Smartphone"

const Services = () => {
    return (
        <div id="services">
            <h4>Services Page</h4>
            <ul>
                <li>
                    <Link to="/services/laptop">Laptop</Link>
                </li>
                <li>
                    <Link to="/services/smartphone">Smartphone</Link>
                </li>
            </ul>
            <Routes>
                <Route path="services/laptop" element={ <Navigation /> } />
                <Route path="/smartphone" element={ <Smartphone /> } />
            </Routes>
        </div>
    )
}

export default Services