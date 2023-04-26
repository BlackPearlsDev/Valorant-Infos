import { Routes, Route } from "react-router-dom";
// Import Pages
import Home from "../Components/Pages/Home/Index";

function Router() {
    return (
        <Routes>
            <Route index path="/" element={<Home />} />
        </Routes>
    );
}

export default Router;