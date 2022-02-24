import * as React from "react"
import { Routes, Route } from "react-router-dom"
import Navigation from "./Navigation"
import Client from "./Views/Client"
import Content from "./Views/Content"
import Home from "./Views/Home"
import Services from "./Views/Services"


const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={ <Navigation /> }>
                <Route index element={ <Home />} />
                <Route path="/client" element={ <Client /> } />
                <Route path="/content" element={ <Content /> } />
                <Route path="/services" element={ <Services /> } />
                </Route>
           </Routes>
        </div>
        )
}

export default Routing