import * as React from "react"
import { Routes, Route } from "react-router-dom"
import Client from "./Layout/Client"
import Content from "./Layout/Content"
import Home from "./Layout/Home"
import Services from "./Layout/Services"


const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={ <Home /> }>
                </Route>
                
                <Route path="/Client" element={ <Client /> }>
                </Route>
                
                <Route path="/Content" element={ <Content /> }>
                </Route>
                
                <Route path="/Services" element={ <Services /> }>
                </Route>
           </Routes>
        </div>
        )
}

export default Routing