import { Routes, Route } from "react-router-dom";
// Import Pages
import Home from "../Components/Pages/Home/Index";
import Agents from "../Components/Pages/Agents/Index";

function Router() {
    return (
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="Valorant-Infos" element={<Home />} /> {/* For GitHub Pages */}
            <Route path="/agents" element={<Agents />} />
        </Routes>
    );
}

export default Router;