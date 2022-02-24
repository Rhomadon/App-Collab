import { Route, Routes } from "react-router"
import Navigation from "./Navigation"
import Hero from "./Component/Hero"
import Materi from "./Component/Materi"
import Berita from "./Component/Berita"


const Collab = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={ <Navigation /> }>
                    <Route index element={ <Hero />} />
                    <Route path="materi" element={ <Materi /> } />
                    <Route path="berita" element={ <Berita /> } />
                </Route>
           </Routes>
        </div>
    )
}

export default Collab