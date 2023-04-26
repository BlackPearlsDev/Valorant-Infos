import { Routes, Route } from "react-router-dom";
// Import Pages
import Home from "../Components/Pages/Home/Index";
import Agents from "../Components/Pages/Agents/Index";
import Maps from "../Components/Pages/Maps/Index";
import SelectedMap from "../Components/Pages/SelectedMap/Index";
import Weapons from "../Components/Pages/Weapons/Index";

function Router() {
    return (
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="Valorant-Infos" element={<Home />} /> {/* For GitHub Pages */}
            <Route path="/agents" element={<Agents />} />
            <Route path="/maps" element={<Maps />} />
            <Route path="/maps/:map" element={<SelectedMap />} />
            <Route path="/weapons" element={<Weapons />} />
        </Routes>
    );
}

export default Router;